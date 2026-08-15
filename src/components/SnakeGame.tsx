import { useState, useEffect, useCallback } from 'react'
import './SnakeGame.css'

interface Position {
  x: number
  y: number
}

const GRID_SIZE = 20
const CELL_SIZE = 18
const INITIAL_SPEED = 100

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }])
  const [food, setFood] = useState<Position>({ x: 15, y: 15 })
  const [direction, setDirection] = useState<Position>({ x: 1, y: 0 })
  const [nextDirection, setNextDirection] = useState<Position>({ x: 1, y: 0 })
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [speed, setSpeed] = useState(INITIAL_SPEED)

  const generateFood = useCallback(() => {
    let newFood: Position
    let isOnSnake: boolean
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      }
      isOnSnake = snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)
    } while (isOnSnake)
    return newFood
  }, [snake])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) return

      const key = e.key.toLowerCase()
      const controls = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd']
      if (!controls.includes(key)) return

      e.preventDefault()

      if (key === 'arrowup' && direction.y === 0) setNextDirection({ x: 0, y: -1 })
      else if (key === 'arrowdown' && direction.y === 0) setNextDirection({ x: 0, y: 1 })
      else if (key === 'arrowleft' && direction.x === 0) setNextDirection({ x: -1, y: 0 })
      else if (key === 'arrowright' && direction.x === 0) setNextDirection({ x: 1, y: 0 })
      else if (key === 'w' && direction.y === 0) setNextDirection({ x: 0, y: -1 })
      else if (key === 's' && direction.y === 0) setNextDirection({ x: 0, y: 1 })
      else if (key === 'a' && direction.x === 0) setNextDirection({ x: -1, y: 0 })
      else if (key === 'd' && direction.x === 0) setNextDirection({ x: 1, y: 0 })
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [direction, gameStarted])

  useEffect(() => {
    if (!gameStarted || gameOver) return

    const gameLoop = setInterval(() => {
      setSnake((prevSnake) => {
        setDirection(nextDirection)

        const head = prevSnake[0]
        const newHead: Position = {
          x: (head.x + nextDirection.x + GRID_SIZE) % GRID_SIZE,
          y: (head.y + nextDirection.y + GRID_SIZE) % GRID_SIZE,
        }

        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true)
          return prevSnake
        }

        const newSnake = [newHead, ...prevSnake]
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10)
          setFood(generateFood())
          setSpeed((s) => Math.max(50, s - 2))
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }, speed)

    return () => clearInterval(gameLoop)
  }, [gameStarted, gameOver, food, speed, nextDirection, generateFood])

  const startGame = () => {
    setSnake([{ x: 10, y: 10 }])
    setFood(generateFood())
    setDirection({ x: 1, y: 0 })
    setNextDirection({ x: 1, y: 0 })
    setScore(0)
    setGameOver(false)
    setGameStarted(true)
    setSpeed(INITIAL_SPEED)
  }

  const resetGame = () => {
    setGameStarted(false)
    setGameOver(false)
    setSnake([{ x: 10, y: 10 }])
    setScore(0)
    setSpeed(INITIAL_SPEED)
  }

  return (
    <section id="play" className="play">
      <div className="container">
        <h2 className="section-title">A little play</h2>
        <p className="section-lede">Take a break. Arrow keys or WASD once the game starts.</p>

        <div className="snake-shell">
          <div className="snake-meta">
            <span className="score">Score {score}</span>
            {gameOver && <span className="game-over-message">Game over</span>}
          </div>

          <div
            className="game-board"
            style={{
              width: `${GRID_SIZE * CELL_SIZE}px`,
              height: `${GRID_SIZE * CELL_SIZE}px`,
            }}
          >
            <div
              className="food"
              style={{
                left: `${food.x * CELL_SIZE}px`,
                top: `${food.y * CELL_SIZE}px`,
                width: `${CELL_SIZE}px`,
                height: `${CELL_SIZE}px`,
              }}
            />
            {snake.map((segment, index) => (
              <div
                key={`${segment.x}-${segment.y}-${index}`}
                className={`snake-segment ${index === 0 ? 'head' : ''}`}
                style={{
                  left: `${segment.x * CELL_SIZE}px`,
                  top: `${segment.y * CELL_SIZE}px`,
                  width: `${CELL_SIZE}px`,
                  height: `${CELL_SIZE}px`,
                }}
              />
            ))}
          </div>

          <div className="snake-controls">
            {!gameStarted && !gameOver && (
              <button className="btn btn-primary" type="button" onClick={startGame}>
                Start
              </button>
            )}
            {gameOver && (
              <button className="btn btn-primary" type="button" onClick={startGame}>
                Play again
              </button>
            )}
            {gameStarted && !gameOver && (
              <button className="btn btn-secondary" type="button" onClick={resetGame}>
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

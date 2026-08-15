import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual__glow" />
        <div className="hero-visual__panel hero-visual__panel--a" />
        <div className="hero-visual__panel hero-visual__panel--b" />
        <div className="hero-visual__grid" />
        <div className="hero-visual__beam" />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-brand">Calap</p>
          <h1 className="hero-title">Interfaces with intention.</h1>
          <p className="hero-subtitle">
            I design and build web products that feel clear, fast, and quietly memorable.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              See the work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

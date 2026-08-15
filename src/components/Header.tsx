import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import './Header.css'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={close}>
          Calap
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          <a href="#about" onClick={close}>
            About
          </a>
          <a href="#projects" onClick={close}>
            Work
          </a>
          <a href="#play" onClick={close}>
            Play
          </a>
          <a href="#contact" onClick={close}>
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            <span className="theme-toggle__track" aria-hidden="true">
              <span className={`theme-toggle__thumb ${theme === 'dark' ? 'is-dark' : ''}`} />
            </span>
          </button>
          <button
            className={`menu-toggle ${open ? 'is-open' : ''}`}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

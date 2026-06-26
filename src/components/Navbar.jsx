import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.inner} container`}>
        <a href="#hero" className={styles.logo} onClick={e => handleNav(e, 'hero')}>
          <span className={styles.logoText}>DI</span>
          <span className={styles.logoDot}>.</span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className={styles.link} onClick={e => handleNav(e, l)}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button className={`${styles.burger} ${open ? styles.burgerOpen : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
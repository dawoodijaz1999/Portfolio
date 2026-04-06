import { useRef, useEffect } from 'react'
import styles from './About.module.css'

function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add(styles.visible), delay); obs.unobserve(el) }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return ref
}

export default function About() {
  const r1 = useReveal(0)
  const r2 = useReveal(150)

  return (
    <section className={styles.section} id="about">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About <span className="hl">Me</span></h2>

        <div className={styles.grid}>
          <div className={styles.text} ref={r1}>
            <p>I'm a <strong>Software Engineer</strong> specializing in full-stack and backend development with the MERN stack. I build end-to-end web applications — from responsive interfaces to robust, scalable APIs.</p>
            <p>Over the past year I've been shipping production features, leading AI integration projects, and implementing real-time systems with WebSockets. I care deeply about <strong>clean code, performance, and maintainability</strong>.</p>
            <p>Currently at <strong>Codeable</strong>, building AI-powered applications and contributing to backend architecture. I'm always looking for challenging problems and teams that push the craft forward.</p>
            <div className={styles.softSkills}>
              {['Team Collaboration','Problem Solving','Communication','Time Management','Attention to Detail'].map(s => (
                <span className="tag" key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className={styles.card} ref={r2}>
            <p className={styles.cardLabel}>contact info</p>
            {[
              { icon: '✉', label: 'Email', val: 'dawoodijaz81@gmail.com', href: 'mailto:dawoodijaz81@gmail.com' },
              { icon: '☏', label: 'Phone', val: '+92 307 7579019', href: 'tel:+923077579019' },
              { icon: 'in', label: 'LinkedIn', val: 'dawood-ijaz', href: 'https://www.linkedin.com/in/dawood-ijaz-1707a7356/' },
            ].map(item => (
              <div className={styles.contactRow} key={item.label}>
                <span className={styles.contactIcon}>{item.icon}</span>
                <div>
                  <span className={styles.contactLabel}>{item.label}</span>
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={styles.contactVal}>{item.val}</a>
                    : <span className={styles.contactVal} style={{ color: 'var(--text2)' }}>{item.val}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

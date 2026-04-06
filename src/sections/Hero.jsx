import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.blob} />
      <div className={styles.blob2} />
      <div className={`${styles.inner} container`}>

<h1 className={styles.name}>
          Dawood<br />
          <span className={styles.serif}>Ijaz.</span>
        </h1>

        <p className={styles.title}>Full Stack &amp; Backend Engineer</p>

        <p className={styles.desc}>
          Building <strong>scalable web applications</strong> with the MERN stack.
          Passionate about <strong>AI integration</strong>, clean APIs, and
          experiences that perform at scale.
        </p>

        <div className={styles.btns}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
            <span className={styles.btnIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </span>
            View My Work
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>

        <div className={styles.stats}>
          {[
            { num: '2+', label: 'Years Exp.' },
            { num: '6+', label: 'Projects' },
            { num: 'AI', label: 'Integrated' },
          ].map(s => (
            <div className={styles.stat} key={s.label}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
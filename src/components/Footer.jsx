import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <span className={styles.name}>Dawood Ijaz</span>
        <span className={styles.sep}>·</span>
        <span className={styles.copy}>Full Stack Engineer</span>
        <span className={styles.sep}>·</span>
        <span className={styles.year}>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

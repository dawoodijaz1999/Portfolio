import { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

// ─── EMAILJS CONFIG ───────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
// 4. Go to Account → API Keys → copy your Public Key
// Replace the three values below with yours:
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ──────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null)
  const sectionRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const el = sectionRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add(styles.visible); obs.unobserve(el) }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.inner} ref={sectionRef}>
          <div className={styles.left}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Let's work together</p>
            <h2 className={styles.title}>
              Get In <span className={styles.hl}>Touch</span>
            </h2>
            <p className={styles.sub}>
              Open to full-time roles, remote contracts, and interesting
              collaborations. Drop me a message and I'll get back to you within 24 hours.
            </p>
            <div className={styles.contactCards}>
              <a href="mailto:dawoodijaz81@gmail.com" className={styles.contactCard}>
                <span className={styles.cardIcon}>✉</span>
                <div>
                  <span className={styles.cardLabel}>Email</span>
                  <span className={styles.cardVal}>dawoodijaz81@gmail.com</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/dawood-ijaz-1707a7356/" target="_blank" rel="noreferrer" className={styles.contactCard}>
                <span className={styles.cardIcon}>in</span>
                <div>
                  <span className={styles.cardLabel}>LinkedIn</span>
                  <span className={styles.cardVal}>dawood-ijaz</span>
                </div>
              </a>
              <a href="tel:+923077579019" className={styles.contactCard}>
                <span className={styles.cardIcon}>☏</span>
                <div>
                  <span className={styles.cardLabel}>Phone</span>
                  <span className={styles.cardVal}>+92 307 7579019</span>
                </div>
              </a>
            </div>
          </div>

          <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">Your Name</label>
              <input
                id="name" name="name" type="text"
                className={styles.input}
                placeholder="John Smith"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Email Address</label>
              <input
                id="email" name="email" type="email"
                className={styles.input}
                placeholder="john@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Hi Dawood, I'd like to discuss an opportunity..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>✓ Message sent! I'll reply within 24 hours.</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Please email me directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

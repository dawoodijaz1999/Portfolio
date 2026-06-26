import { useRef, useEffect, useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const sectionRef = useRef(null)
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

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=dawoodijaz1999@gmail.com&su=${subject}&body=${body}`)
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
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dawoodijaz1999@gmail.com" target="_blank" rel="noreferrer" className={styles.contactCard}>
                <span className={styles.cardIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
                <div>
                  <span className={styles.cardLabel}>Email</span>
                  <span className={styles.cardVal}>dawoodijaz1999@gmail.com</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/dawood-ijaz-1707a7356/" target="_blank" rel="noreferrer" className={styles.contactCard}>
                <span className={styles.cardIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></span>
                <div>
                  <span className={styles.cardLabel}>LinkedIn</span>
                  <span className={styles.cardVal}>dawood-ijaz</span>
                </div>
              </a>
              <a href="tel:+923077579019" className={styles.contactCard}>
                <span className={styles.cardIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
                <div>
                  <span className={styles.cardLabel}>Phone</span>
                  <span className={styles.cardVal}>+92 307 7579019</span>
                </div>
              </a>
              <a href="https://wa.me/923077579019" target="_blank" rel="noreferrer" className={styles.contactCard}>
                <span className={styles.cardIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></span>
                <div>
                  <span className={styles.cardLabel}>WhatsApp</span>
                  <span className={styles.cardVal}>+92 307 7579019</span>
                </div>
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
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
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
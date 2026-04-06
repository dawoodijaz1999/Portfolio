import { useRef, useEffect } from 'react'
import styles from './Experience.module.css'

const jobs = [
  {
    period: 'Feb 2026 — Present',
    role: 'Software Engineer',
    company: 'Codeable',
    current: true,
    bullets: [
      'Developing MERN stack and AI-powered applications with React.js, Node.js, and Tailwind CSS.',
      'Leading AI integration projects, building REST APIs, and designing databases for scalable apps.',
      'Implemented real-time features using WebSockets for live client-server communication.',
      'Integrated RevenueCat for in-app subscription management and purchase tracking.',
      'Participating in Agile sprints, sprint planning, and peer code reviews.',
    ],
  },
  {
    period: 'Dec 2024 — Feb 2026',
    role: 'Software Engineer',
    company: 'Cloftech',
    current: false,
    bullets: [
      'Designed and developed full-stack features using the MERN stack, improving functionality and performance.',
      'Built REST APIs with Node.js and Express.js for seamless frontend-backend data flow.',
      'Integrated MongoDB and Mongoose schemas for efficient database management and querying.',
      'Developed reusable React components; optimized performance with lazy loading and memoization.',
      'Collaborated using Agile/Scrum, Git branching strategies, and code reviews.',
    ],
  },
  {
    period: 'Nov 2024 — Feb 2025',
    role: 'Software Engineer (Part-time, Remote)',
    company: 'Rhombix Technologies',
    current: false,
    bullets: [
      'Developed scalable React frontends integrated with Node.js APIs and MongoDB.',
      'Enhanced responsiveness and performance using TypeScript and Tailwind CSS.',
      'Implemented JWT authentication and role-based access control.',
      'Managed Git/GitHub version control, code reviews, and deployments.',
    ],
  },
]

function ExpItem({ job, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add(styles.visible), delay); obs.unobserve(el) }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div className={styles.item} ref={ref}>
      <div className={styles.dotCol}>
        <div className={`${styles.dot} ${job.current ? styles.dotActive : ''}`} />
      </div>
      <div className={styles.content}>
        <p className={styles.period}>{job.period}</p>
        <h3 className={styles.role}>{job.role}</h3>
        <p className={styles.company}>{job.company}</p>
        <ul className={styles.bullets}>
          {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className="container">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title">Work <span className="hl">Experience</span></h2>
        <div className={styles.list}>
          {jobs.map((j, i) => <ExpItem job={j} delay={i * 120} key={j.company} />)}
        </div>
      </div>
    </section>
  )
}

import { useRef, useEffect } from 'react'
import styles from './Skills.module.css'

const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'Mongoose', 'RESTful APIs'],
  },
  {
    title: 'State & Styling',
    items: ['Redux Toolkit', 'Zustand', 'Context API', 'Tailwind CSS', 'Material UI', 'Bootstrap'],
  },
  {
    title: 'Tools & Cloud',
    items: ['Git & GitHub', 'Firebase', 'JWT Auth', 'WebSockets', 'AWS EC2', 'Postman', 'Agile/Scrum', 'AI Integration'],
  },
]

function SkillCard({ skill, delay }) {
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
    <div className={styles.card} ref={ref}>
      <h3 className={styles.cardTitle}>{skill.title}</h3>
      <div className={styles.tags}>
        {skill.items.map(item => (
          <span className="tag tag-dark" key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className="container">
        <p className="section-label section-label-dark">What I work with</p>
        <h2 className="section-title section-title-dark">Technical <span className="hl">Skills</span></h2>
        <div className={styles.grid}>
          {skills.map((s, i) => <SkillCard skill={s} delay={i * 100} key={s.title} />)}
        </div>
      </div>
    </section>
  )
}

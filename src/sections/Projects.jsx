import { useRef, useEffect } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    name: 'Muebly',
    desc: 'AI image-generation platform for a furniture store. Integrated multiple AI models via Replicate API, built backend APIs, DB schemas, and deployed on AWS EC2.',
    stack: ['React.js', 'Node.js', 'Replicate API', 'MongoDB', 'AWS EC2'],
    github: '#',
    live: null,
  },
  {
    name: 'TCC',
    desc: 'Teacher-parent communication platform with three roles — Admin, Teacher, and Parent. Teachers log student notes and behavior, and parents can view updates in real time. Integrated Claude Haiku AI to generate smart summaries of student activity and notes.',
    stack: ['React', 'Node.js', 'MongoDB', 'Claude Haiku API', 'JWT'],
    github: '#',
    live: null,
  },
  {
    name: 'Phrase Lab AI',
    desc: 'AI-powered content tool for paraphrasing, SEO optimization, and text generation. Real-time content suggestions using OpenAI APIs.',
    stack: ['React', 'Node.js', 'OpenAI API', 'Express.js'],
    github: '#',
    live: null,
  },
  {
    name: 'Camera by Centennial',
    desc: 'Photo management platform for organizations to upload pictures of child activities. Parents can browse and view photos, with paid downloads powered by Stripe payment integration.',
    stack: ['React', 'Node.js', 'Stripe API', 'MongoDB', 'AWS S3'],
    github: '#',
    live: null,
  },
  {
    name: 'Holos',
    desc: 'Pickleball court booking app. Developed the full backend including booking logic, court availability management, and user authentication.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT'],
    github: '#',
    live: null,
  },
  {
    name: 'WanderLust',
    desc: 'Travel booking app with Firebase authentication, dynamic routing, and a fully responsive UI. Clean UX focused on simplicity and speed.',
    stack: ['React.js', 'Tailwind CSS', 'Firebase'],
    github: '#',
    live: '#',
  },
  {
    name: 'Bummbuu',
    desc: 'Multi-language learning platform. Engaging front-end landing pages with modern design, smooth animations, and mobile-first responsiveness.',
    stack: ['React.js', 'CSS3', 'Responsive Design'],
    github: '#',
    live: null,
  },
  {
    name: 'MERN Blog App',
    desc: 'Complete CRUD blog platform — authentication, protected routes, rich text posts, and a clean admin experience.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    live: '#',
  },
]

function FolderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

function ProjectCard({ p, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add(styles.visible), delay); obs.unobserve(el) }
    }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.cardTop}>
        <span className={styles.folderIcon}><FolderIcon /></span>
        <div className={styles.cardLinks}>
          {p.github && (
            <a href={p.github} className={styles.cardLink} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {p.live && (
            <a href={p.live} className={styles.cardLink} target="_blank" rel="noreferrer" aria-label="Live demo">
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>
      <h3 className={styles.cardName}>{p.name}</h3>
      <p className={styles.cardDesc}>{p.desc}</p>
      <div className={styles.cardStack}>
        {p.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <p className="section-label section-label-dark">What I've built</p>
        <h2 className="section-title section-title-dark">Key <span className="hl">Projects</span></h2>
        <div className={styles.grid}>
          {projects.map((p, i) => <ProjectCard p={p} delay={(i % 3) * 100} key={p.name} />)}
        </div>
      </div>
    </section>
  )
}
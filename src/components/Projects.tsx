import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Northline Commerce',
    description:
      'A product catalog and checkout experience built for speed, clarity, and conversion.',
    tags: ['React', 'Node.js', 'Stripe'],
    link: 'https://github.com',
    year: '2025',
  },
  {
    id: 2,
    title: 'Pulse Tasks',
    description:
      'Collaborative task flows with live updates and a calm, distraction-free workspace.',
    tags: ['React', 'Firebase'],
    link: 'https://github.com',
    year: '2025',
  },
  {
    id: 3,
    title: 'Horizon Weather',
    description:
      'A location-aware forecast dashboard with crisp typography and restrained motion.',
    tags: ['React', 'API'],
    link: 'https://github.com',
    year: '2024',
  },
  {
    id: 4,
    title: 'Field Notes',
    description:
      'A writing platform with markdown, comments, and sharing — built for long-form focus.',
    tags: ['Next.js', 'PostgreSQL'],
    link: 'https://github.com',
    year: '2024',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Selected work</h2>
        <p className="section-lede">A few recent builds that show how I think about product.</p>

        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={project.link}
                className="project-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="project-year">{project.year}</span>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

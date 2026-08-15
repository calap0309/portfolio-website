import './About.css'

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'CSS Architecture',
  'Product Design',
  'Vite',
  'Git',
  'API Design',
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-lede">
          Full-stack developer focused on calm interfaces and reliable systems.
        </p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I build web applications that balance craft and clarity — from first sketch to
              shipped product. My work sits at the intersection of design systems, front-end
              performance, and thoughtful interaction.
            </p>
            <p>
              Outside of client work I explore new tooling, contribute where I can, and keep
              refining how teams ship software without the noise.
            </p>
          </div>

          <div className="skills">
            <h3>Tools I reach for</h3>
            <ul className="skill-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

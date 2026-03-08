import { portfolio } from './data/portfolio';
import SectionTitle from './components/SectionTitle';

function Navbar() {
  return (
    <header className="nav-shell">
      <div className="container nav">
        <a className="brand" href="#home">
          <span className="brand-mark">{portfolio.initials}</span>
          <span>{portfolio.shortName}</span>
        </a>
        <nav>
          {portfolio.nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Portfolio / Cyber Security</p>
          <h1>{portfolio.name}</h1>
          <p className="lead">{portfolio.role}</p>
          <p className="hero-copy">{portfolio.tagline}</p>
          <p className="hero-copy">{portfolio.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Project Gallery
            </a>
            <a className="btn btn-secondary" href={portfolio.github} target="_blank" rel="noreferrer">
              Visit GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span className="status-dot" />
            <p>{portfolio.location}</p>
          </div>
          <h3>{portfolio.education}</h3>
          <p>
            {portfolio.university} · {portfolio.specialization}
          </p>
          <div className="hero-meta-list">
            <div>
              <span>Current Role</span>
              <strong>{portfolio.currentRole}</strong>
            </div>
            <div>
              <span>Company</span>
              <strong>{portfolio.company}</strong>
            </div>
            <div>
              <span>Started</span>
              <strong>{portfolio.internshipStart}</strong>
            </div>
          </div>
          <div className="stats-grid">
            {portfolio.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle
          eyebrow="About"
          title="A portfolio built around secure thinking and practical development"
          text="I am a final-year B.Tech CSE student at MIT ADT University, Pune, specializing in Cyber Security. I enjoy building applications that combine structured engineering, clean interfaces, and security awareness."
        />
        <div className="about-grid">
          <div className="about-panel glow-card">
            <h3>Profile Highlights</h3>
            <ul>
              {portfolio.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about-panel glow-card">
            <h3>How I Approach Work</h3>
            <ul>
              {portfolio.mindset.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-dark" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Technical strengths I am building and applying"
          text="My current work combines software engineering fundamentals with cybersecurity-oriented problem solving and full-stack application development."
        />
        <div className="card-grid">
          {portfolio.skills.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title={portfolio.projectGalleryTitle}
          text="A mix of security-focused and software engineering projects that reflect my learning journey, technical interests, and practical implementation skills."
        />
        <div className="projects-grid">
          {portfolio.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section section-dark" id="journey">
      <div className="container">
        <SectionTitle
          eyebrow="Journey"
          title="Learning through projects, practice, and real-world exposure"
          text="My path is built on academic learning, project-based development, and growing experience in real software environments."
        />
        <div className="timeline">
          {portfolio.journey.map((item) => (
            <div className="timeline-item" key={item.year + item.title}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-shell">
        <div>
          <SectionTitle
            eyebrow="Beyond Coding"
            title="Creativity is part of how I build"
            text="Beyond development and cybersecurity, I enjoy painting, art & craft, and designing. For me, coding is also a creative outlet—where logic and imagination meet."
          />
          <div className="tag-row hobby-row">
            {portfolio.hobbies.map((hobby) => (
              <span key={hobby}>{hobby}</span>
            ))}
          </div>
        </div>
        <div className="contact-grid">
          {portfolio.contactCards.map((card) => (
            <a
              key={card.label}
              className={`contact-card ${card.href === '#' ? 'no-link' : ''}`}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <p>{card.label}</p>
              <h3>{card.value}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 {portfolio.name}. Built from scratch in React for Rajnandini.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

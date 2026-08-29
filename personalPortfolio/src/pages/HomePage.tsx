import PageShell from '../components/PageShell'
import { portfolioProjects, projects } from '../data/portfolio'

function HomePage() {
  return (
    <PageShell>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Welcome this is</p>
          <h1>Allen.</h1>
          <p className="intro">
            I am an aspiring software engineer with the goal to gain experience
            with internships. I code projects both fullstack and backend.
            My website contains my experiences and blogs.
          </p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/allenram/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.33 8.1h4.34V23H.33V8.1Zm7.02 0h4.16v2.04h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.67V23h-4.34v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.96-2.88 3.98V23H7.35V8.1Z" />
              </svg>
            </a>
            <a
              className="icon-link"
              href="https://github.com/drizzyallen"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.16 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              className="icon-link"
              href="https://www.youtube.com/@AllenTheTeacher"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube channel"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.53 3.58 12 3.58 12 3.58s-7.53 0-9.39.5A3 3 0 0 0 .5 6.2 31.17 31.17 0 0 0 0 12a31.17 31.17 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.86.5 9.39.5 9.39.5s7.53 0 9.39-.5a3 3 0 0 0 2.11-2.12A31.17 31.17 0 0 0 24 12a31.17 31.17 0 0 0-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
              </svg>
            </a>
            <a className="hero-contact-link" href="#contact">
              My other contacts
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <h2>My experiences.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="technical-skills">
          <h3>Technical skills</h3>
          <p>
            <span>Languages:</span> JavaScript/TypeScript, Java, Python,
            C++, C#, SQL, HTML/CSS, R, Assembly
          </p>
          <p>
            <span>Frameworks:</span> Node.js, Express.js, React (Next.js),
            Visual Studio Code, Google Colab (Jupyter Notebooks), Eclipse, Git/GitHub
          </p>
          <p>
            <span>Tools:</span> Supabase, PostgreSQL, PyTorch, CUDA, RESTful API, JWT, FastAPI,
            Docker, Postman, Linux, LLMs
          </p>
        </div>

        <div className="section-heading projects-heading">
          <h2>Projects.</h2>
        </div>

        {portfolioProjects.length > 0 ? (
          <div className="project-list">
            {portfolioProjects.map((project) => (
              <article className="project" key={project.name}>
                <div>
                  <div className="project-title">
                    <h3>{project.name}</h3>
                    <span>{project.detail}</span>
                    {project.githubUrl ? (
                      <a
                        className="project-icon-link"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.16 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                        </svg>
                      </a>
                    ) : null}
                    {project.slidesUrl ? (
                      <a
                        className="project-icon-link"
                        href={project.slidesUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} pitch deck slides`}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M6 2.5h8.3L20 8.2V21.5H6V2.5Zm8 1.9v4.1h4.1L14 4.4ZM8 4.5v15h10V10.3h-6V4.5H8Zm2 8h6v1.6h-6v-1.6Zm0 3.2h6v1.6h-6v-1.6Z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                  <p>{project.description}</p>
                </div>
                {project.image ? (
                  project.url ? (
                    <a
                      className="project-screenshot-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.name}`}
                    >
                      <img
                        className="project-screenshot"
                        src={project.image}
                        alt={`${project.name} screenshot`}
                      />
                    </a>
                  ) : (
                    <img
                      className="project-screenshot"
                      src={project.image}
                      alt={`${project.name} screenshot`}
                    />
                  )
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">projects will be added soon</p>
        )}
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Keep in touch?</h2>
        </div>
        <div className="contact-details" aria-label="Contact details">
          <div className="contact-row">
            <span>Main</span>
            <a href="mailto:allenchrisrwork@gmail.com">
              allenchrisrwork@gmail.com
            </a>
            <span>Alt</span>
            <a href="mailto:allenram.15@yahoo.com">allenram.15@yahoo.com</a>
          </div>
          <div className="contact-row">
            <span>Phone:</span>
            <a href="tel:+19083440461">908-344-0461</a>
          </div>
        </div>
      </section>

      <section className="about-button-section" id="learn-more">
        <a className="button large-button" href="/about">
          Learn more about me
        </a>
      </section>
    </PageShell>
  )
}

export default HomePage

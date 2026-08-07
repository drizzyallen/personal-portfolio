import PageShell from '../components/PageShell'

function AboutPage() {
  return (
    <PageShell>
      <section className="about-page">
        <div className="about-intro">
          <p className="eyebrow">About me</p>
          <figure className="portrait-frame">
            <img
              className="portrait-placeholder"
              src="/Me.jpg"
              alt="Allen Chris Ramirez"
            />
            <figcaption>Photo taken on October 12, 2024</figcaption>
          </figure>
          <p>
            I am Allen Chris Ramirez.
          </p>
          <p>I am currently a rising Junior attending Kean University pursuing a bachelors degree in Computer Science.</p>
          <p>I am a member of the ACM Club and on the executive board as a web developer. I currently work as an Object Oriented Programming tutor and a TA for the course that is historically difficult for many students. I have worked in a lecture and lab environment helping out many students understand topics and debugging code. I hold tutoring sessions through the academic semester and summer sessions. I also serve as a Web Developer for the KeanUHackThis hackathon my college hosts annually and along side assist with our hackathon logistics.</p>
          <p>My philosophy of engineering is to know everything, all the screws and tools to fix the screws in your part of the project. I believe in decomposing the problem into smaller bits and solving each bits progress by progress, essentially 1% better each day my baseball coach always says. I believe in synergizing in a team would create a strong and profound result however this comes with project management skills and soft skills. Communication, being proactive and a positive outlooker are paramount when it comes to difficult times during project development.</p>
          <p>Outside of academics and career, I love debating, reading, running, learning history especially U.S history, and engaging complex and controversial topics of life.</p>
          <p></p>
        </div>

        <footer className="about-footer" aria-label="About page contact links">
          <div className="hero-actions">
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
          </div>

          <div className="contact-details">
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
              <a href="tel:+19083440461">+1 908-344-0461</a>
            </div>
          </div>
        </footer>
      </section>
    </PageShell>
  )
}

export default AboutPage

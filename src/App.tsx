import { ArrowUpRight, ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { SectionLabel, Tags } from "./components/Shared";
import { experience, skills, certifications } from "./data/portfolio";
const toolkit = [
  { title: "Languages & data", items: skills[0].items },
  { title: "Generative AI", items: skills[1].items },
  { title: "Machine learning", items: skills[2].items },
  { title: "Deep learning & NLP", items: skills[3].items },
  { title: "Cloud & delivery", items: skills[4].items },
  { title: "Product analytics", items: skills[5].items },
];
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <section
          id="about"
          className="section container split-section"
          tabIndex={-1}
          aria-labelledby="about-heading"
        >
          <SectionLabel number="01">My story</SectionLabel>
          <div className="section-content about-copy">
            <p className="eyebrow">DATA → MODELS → REAL-WORLD USE</p>
            <h3 id="about-heading">
              From understanding behavior
              <br className="desktop-break" /> to building grounded AI.
            </h3>
            <p>
              I’m Sai Saketh, a GenAI Data Scientist working across machine
              learning, product analytics, and production AI. My work starts
              with making data usable and continues through retrieval,
              prediction, evaluation, and monitoring.
            </p>
            <p>
              At Included Health, I work on member navigation and care
              recommendations. Previously, at Neon IT Systems, I developed
              predictive models, NLP workflows, and product experiments.
            </p>
            <p>
              I’m especially interested in AI that is grounded in relevant
              information and evaluated against meaningful outcomes.
            </p>
            <a className="text-link" href="#experience">
              A closer look at my experience
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section
          id="experience"
          className="section container split-section"
          tabIndex={-1}
          aria-labelledby="experience-heading"
        >
          <SectionLabel number="02">Experience</SectionLabel>
          <div className="section-content">
            <h3 id="experience-heading" className="section-intro">
              Applied work. Measurable outcomes.
            </h3>
            <div className="experience-list">
              {experience.map((job) => (
                <article className="experience-row" key={job.company}>
                  <div className="experience-meta">
                    <span className="job-marker" aria-hidden="true" />
                    <span>{job.dates}</span>
                  </div>
                  <div className="experience-title">
                    <h4>{job.company}</h4>
                    <p>{job.role}</p>
                  </div>
                  <p className="job-summary">{job.summary}</p>
                  <ul className="experience-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Tags items={job.tags} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <Projects />
        <section
          id="skills"
          className="section container split-section"
          tabIndex={-1}
          aria-labelledby="skills-heading"
        >
          <SectionLabel number="04">Technical toolkit</SectionLabel>
          <div className="section-content">
            <h3 id="skills-heading" className="section-intro">
              Across the data & AI lifecycle.
            </h3>
            <dl className="skills-list">
              {toolkit.map((skill) => (
                <div className="skill-row" key={skill.title}>
                  <dt>{skill.title}</dt>
                  <dd>{skill.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <section
          id="education"
          className="section container split-section"
          tabIndex={-1}
          aria-labelledby="education-heading"
        >
          <SectionLabel number="05">Education</SectionLabel>
          <div className="section-content">
            <h3 id="education-heading" className="section-intro">
              An analytical foundation.
            </h3>
            <article className="education-row">
              <span className="eyebrow">Aug 2024 — May 2026</span>
              <h4>Florida Atlantic University</h4>
              <p className="degree">
                Master of Science in Data Science and Analytics
              </p>
              <p className="school-location">Boca Raton, Florida</p>
              <p className="education-gpa">
                GPA <strong>3.90 / 4.00</strong>
              </p>
            </article>
            <article className="education-row">
              <span className="eyebrow">Oct 2020 — Apr 2024</span>
              <h4>BV Raju Institute of Technology</h4>
              <p className="degree">
                Bachelor of Technology in Computer Science and Engineering
              </p>
              <p className="school-location">
                Minor in Data Science · Hyderabad, India
              </p>
              <div className="gpa-pair">
                <p className="education-gpa">
                  Computer Science and Engineering (CSE):{" "}
                  <strong>9.09 / 10.00</strong>
                </p>
                <p className="education-gpa">
                  Data Science (Minor): <strong>9.17 / 10.00</strong>
                </p>
              </div>
            </article>
            <div className="certifications">
              <p className="eyebrow">CONTINUED LEARNING</p>
              <h3>Certifications</h3>
              <ul>
                {certifications.map(([name, issuer], i) => (
                  <li key={name}>
                    <span className="cert-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong>{name}</strong>
                      <small>{issuer}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="container">
        <a className="footer-brand" href="#home">
          Sai Saketh Nagavalli
        </a>
        <p>© {new Date().getFullYear()} Sai Saketh Nagavalli</p>
        <a className="back-top" href="#home">
          Back to top
          <ArrowUp size={15} />
        </a>
      </footer>
    </>
  );
}

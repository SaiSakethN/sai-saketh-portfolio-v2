import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Download, Pause, Play } from "lucide-react";
import { profile } from "../data/portfolio";
import { SocialLinks } from "./Shared";
const roles = [
  { first: "AI", second: "Engineer" },
  { first: "Data", second: "Scientist" },
  { first: "Data", second: "Engineer" },
  { first: "GenAI", second: "Engineer" },
  { first: "Machine Learning", second: "Engineer" },
];
export default function Hero() {
  const [role, setRole] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(preference.matches);
      if (preference.matches) setRole(0);
    };
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(() => {
      setRole((index) => (index + 1) % roles.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [paused, reduced]);
  const current = roles[role];
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="portrait-area">
          <img
            src="/images/sai-saketh-grey.webp"
            alt="AI-enhanced professional portrait of Sai Saketh Nagavalli"
            width={640}
            height={640}
            fetchPriority="high"
          />
          <span className="portrait-caption">Florida, USA</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-name">{profile.name}</p>
          <div className="role-area">
            <h1
              id="hero-title"
              className={"rotating-role" + (role === 4 ? " long-role" : "")}
              aria-label="AI Engineer, Data Scientist, Data Engineer, GenAI Engineer, and Machine Learning Engineer"
            >
              <span key={role} className="role-copy" aria-hidden="true">
                <span>{current.first}</span>
                <span>
                  {current.second}
                  <span className="accent">.</span>
                </span>
              </span>
            </h1>
          </div>
          <div className="role-controls">
            {reduced ? (
              <span className="role-static-label">
                AI / DATA / MACHINE LEARNING
              </span>
            ) : (
              <>
                <span aria-hidden="true">
                  {String(role + 1).padStart(2, "0")} /{" "}
                  {String(roles.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => setPaused((value) => !value)}
                  aria-label={
                    paused ? "Resume role rotation" : "Pause role rotation"
                  }
                >
                  {paused ? <Play size={12} /> : <Pause size={12} />}
                  {paused ? "Resume titles" : "Pause titles"}
                </button>
              </>
            )}
          </div>
          <p className="hero-statement">
            Complex data. <span>Useful intelligence.</span>
          </p>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-buttons">
            <a className="button primary" href="#projects">
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href={profile.resume} download>
              Download Resume
              <Download size={17} />
            </a>
          </div>
          <div className="hero-links">
            <SocialLinks />
            <a href="#contact">
              Contact
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <a href="#about">
          <ArrowDown size={14} />
          Explore the work
        </a>
        <p>
          RETRIEVAL <span>/</span> MACHINE LEARNING <span>/</span> EVALUATION
        </p>
      </div>
    </section>
  );
}

import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import { Tags, SectionLabel } from "./Shared";
import ProjectPreview from "./ProjectPreview";
const categories = [
  "All work",
  "Generative AI",
  "Machine learning",
  "NLP",
  "Analytics",
];
function CaseStudy({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = dialog.current;
    el?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
      el?.close();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="case-dialog"
      aria-labelledby="case-title"
      aria-describedby="case-scope"
      onKeyDown={(e) => {
        if (e.key !== "Tab") return;
        const focusable = Array.from(
          e.currentTarget.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex="0"]',
          ),
        );
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (
          e.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === e.currentTarget)
        ) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const rect = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <div className="case-content">
        <div className="case-top">
          <span className="eyebrow">
            {project.company} / {project.category}
          </span>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Close case study"
            autoFocus
          >
            <X size={22} />
          </button>
        </div>
        <h2 id="case-title">{project.title}</h2>
        <p className="case-summary">{project.summary}</p>
        <Tags items={project.tags} />
        <div className="case-impact">
          <strong>{project.metric}</strong>
          <span>{project.metricLabel}</span>
        </div>
        <h3>The problem</h3>
        <p>{project.problem}</p>
        <h3>My technical contribution</h3>
        <ul>
          {project.approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>High-level workflow</h3>
        <p className="caption">Conceptual view of the documented work.</p>
        <ol className="case-workflow">
          {project.workflow.map((item, i) => (
            <li key={item}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {item}
              {i < project.workflow.length - 1 && (
                <ArrowRight size={15} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <h3>Results & impact</h3>
        <p>{project.outcome}</p>
        <div className="scope-note" id="case-scope">
          <strong>Professional case study scope</strong>
          <p>{project.scope}</p>
        </div>
        <button className="button secondary" onClick={onClose}>
          Back to selected work
          <ArrowRight size={16} />
        </button>
      </div>
    </dialog>
  );
}
export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const shown = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );
  function close() {
    setSelected(null);
    requestAnimationFrame(() =>
      trigger.current?.focus({ preventScroll: true }),
    );
  }
  return (
    <section
      id="projects"
      className="section container projects-section"
      tabIndex={-1}
      aria-labelledby="projects-heading"
    >
      <div className="split-section project-intro">
        <SectionLabel number="03">Selected work</SectionLabel>
        <div className="section-content">
          <p className="eyebrow">PROFESSIONAL CASE STUDIES</p>
          <h3 id="projects-heading">
            The problem. The process.
            <br />
            The work behind the outcome.
          </h3>
          <p>
            A closer look at retrieval, prediction, and product intelligence.
            These are summaries of employer work; proprietary code and data
            remain private.
          </p>
        </div>
      </div>
      <div className="project-toolbar">
        <span className="toolbar-label">Filter by discipline</span>
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {categories.map((c) => (
            <button
              key={c}
              className={filter === c ? "selected" : ""}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status">
        {shown.length} case {shown.length === 1 ? "study" : "studies"} shown.
      </p>
      <div className="projects-grid">
        {shown.map((p) => (
          <article key={p.id} className="project-card">
            <ProjectPreview index={projects.indexOf(p)} />
            <div className="project-body">
              <div className="project-company">
                <span>{p.company}</span>
                <span>Professional case study</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.summary}</p>
              <Tags items={p.tags} />
              <div className="project-bottom">
                <div className="project-metric">
                  <strong>{p.metric}</strong>
                  <span>{p.metricLabel}</span>
                </div>
                <button
                  className="case-link"
                  onClick={(e) => {
                    trigger.current = e.currentTarget;
                    setSelected(p);
                  }}
                  aria-label={"Read case study: " + p.title}
                >
                  Read case study
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="projects-note">
        <span aria-hidden="true">↳</span> Conceptual previews illustrate
        documented workflows. No employer code, data, or internal interfaces are
        shared.
      </p>
      {selected && <CaseStudy project={selected} onClose={close} />}
    </section>
  );
}

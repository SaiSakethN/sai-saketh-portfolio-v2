import type { ReactNode } from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="section-label">
      <span className="section-index">/{number}</span>
      <h2>{children}</h2>
      <span className="code-mark" aria-hidden="true">
        &lt;/&gt;
      </span>
    </div>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies and methods">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export function SocialLinks() {
  return (
    <div className="social-links">
      <a href={profile.github} target="_blank" rel="noreferrer">
        <Github size={16} />
        GitHub
        <ArrowUpRight size={14} />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        <Linkedin size={16} />
        LinkedIn
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

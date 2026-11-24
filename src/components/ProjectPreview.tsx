import type { Project } from "../data/portfolio";
export default function ProjectPreview({ project }: { project: Project }) {
  return <div className="project-visual"><img src={project.image} alt={project.title + (project.image.endsWith('.svg') ? " architecture illustration" : " actual application or report screenshot")} loading="lazy" width={1000} height={480} /></div>;
}

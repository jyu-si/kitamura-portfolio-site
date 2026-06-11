import type { Project } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <a href={`#${project.id}`} aria-label={`${project.title}の詳細を見る`}>
        <div className={`project-card-image fit-${project.heroFit ?? "cover"}`}>
          <img src={assetUrl(project.hero)} alt="" />
          <span>{project.number}</span>
        </div>
        <div className="project-card-body">
          <p className="project-card-category">{project.categories.slice(0, 3).join(" / ")}</p>
          <h3>{project.title}</h3>
          <h4>{project.subtitle}</h4>
          <dl className="project-card-facts">
            <div><dt>Role</dt><dd>{project.roles.slice(0, 3).join(" / ")}</dd></div>
            <div><dt>Tools</dt><dd>{(project.technologies ?? project.categories).slice(0, 3).join(" / ")}</dd></div>
            <div><dt>Output</dt><dd>{project.result ?? project.summary}</dd></div>
          </dl>
          <strong>
            詳細を見る <i aria-hidden="true">↘</i>
          </strong>
        </div>
      </a>
    </article>
  );
}

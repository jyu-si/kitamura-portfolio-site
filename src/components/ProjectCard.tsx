import type { Project } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card-${project.id}`}>
      <a href={`#/projects/${project.id}`} aria-label={`${project.title}の詳細を見る`}>
        <div
          className={`project-card-image fit-${project.heroFit ?? "cover"} ${
            project.heroSecondary ? "has-pair" : ""
          }`}
        >
          <img src={assetUrl(project.hero)} alt="" />
          {project.heroSecondary && <img src={assetUrl(project.heroSecondary)} alt="" />}
          <span>{project.number}</span>
        </div>
        <div className="project-card-body">
          <p className="project-card-category">{project.categories.slice(0, 3).join(" / ")}</p>
          <h3>{project.title}</h3>
          <h4>{project.subtitle}</h4>
          <strong>
            VIEW PROJECT <i aria-hidden="true">↗</i>
          </strong>
        </div>
      </a>
    </article>
  );
}

import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <a href={`#${project.id}`} aria-label={`${project.title}の詳細を見る`}>
        <div className={`project-card-image fit-${project.heroFit ?? "cover"}`}>
          <img src={project.hero} alt="" />
          <span>{project.number}</span>
        </div>
        <div className="project-card-body">
          <p>{project.categories.slice(0, 3).join(" / ")}</p>
          <h3>{project.title}</h3>
          <h4>{project.subtitle}</h4>
          <span>{project.summary}</span>
          <strong>
            詳細を見る <i aria-hidden="true">↘</i>
          </strong>
        </div>
      </a>
    </article>
  );
}

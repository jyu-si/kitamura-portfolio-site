import type { Project } from "../data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="project-detail" id={project.id}>
      <div className="container">
        <header className="detail-header">
          <div className="detail-heading">
            <p className="eyebrow">PROJECT {project.number}</p>
            <h2>{project.title}</h2>
            <h3>{project.subtitle}</h3>
            <p>{project.note}</p>
          </div>
          <div className={`detail-hero fit-${project.heroFit ?? "cover"}`}>
            <img src={project.hero} alt={`${project.title}のメインビジュアル`} />
          </div>
        </header>

        <div className="detail-overview">
          <div className="overview-statement">
            <span>OVERVIEW</span>
            <p>{project.summary}</p>
            {project.result && <strong>{project.result}</strong>}
          </div>
          <dl>
            <div>
              <dt>Role</dt>
              <dd>{project.roles.join(" / ")}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{project.categories.join(" / ")}</dd>
            </div>
            {project.technologies && (
              <div>
                <dt>Technology</dt>
                <dd>{project.technologies.join(" / ")}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="detail-sections">
          {project.sections.map((section, index) => (
            <section className="detail-section" key={section.label}>
              <div className="detail-section-copy">
                <p>
                  {String(index + 1).padStart(2, "0")} / {section.label}
                </p>
                <h3>{section.title}</h3>
                <span>{section.text}</span>
                {section.points && (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              {section.gallery && (
                <div className={`detail-gallery gallery-${Math.min(section.gallery.length, 3)}`}>
                  {section.gallery.map((item) => (
                    <figure key={item.image}>
                      <div className={`gallery-image fit-${item.fit ?? "cover"}`}>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <figcaption>
                        <strong>{item.title}</strong>
                        <span>{item.caption}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <footer className="learning">
          <p>LEARNING</p>
          <h3>{project.learning}</h3>
          <a href="#projects">Projects一覧へ戻る ↑</a>
        </footer>
      </div>
    </article>
  );
}

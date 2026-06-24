import type { Project } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";
import WadaiProjectContent from "./WadaiProjectContent";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className={`project-detail project-detail-${project.id}`} id={project.id}>
      <div className="container">
        <header className="detail-header">
          <div className="detail-heading">
            <p className="eyebrow">PROJECT {project.number}</p>
            <h2>{project.title}</h2>
            <h3>{project.subtitle}</h3>
            <p className="detail-summary">{project.summary}</p>
            <p>{project.note}</p>
          </div>
          <dl className="detail-facts">
            <div>
              <dt>Role</dt>
              <dd>{project.roles.join(" / ")}</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>{(project.technologies ?? project.categories).join(" / ")}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{project.team}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{project.period}</dd>
            </div>
          </dl>
          <div className="detail-impact">
            <p>Outcome</p>
            <strong>{project.result}</strong>
            <h3>{project.resultLabel}</h3>
            <span>{project.resultDetail}</span>
          </div>
          <div
            className={`detail-hero fit-${project.heroFit ?? "cover"} ${
              project.heroSecondary ? "has-pair" : ""
            }`}
          >
            <img src={assetUrl(project.hero)} alt={`${project.title}のメインビジュアル`} />
            {project.heroSecondary && (
              <img
                src={assetUrl(project.heroSecondary)}
                alt={`${project.title}のランキング画面`}
              />
            )}
          </div>
        </header>

        {project.id === "wadai-de-wadai" ? (
          <WadaiProjectContent />
        ) : (
          <>
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
                    <div
                      className={`detail-gallery gallery-${Math.min(section.gallery.length, 3)}`}
                    >
                      {section.gallery.map((item) => (
                        <figure key={item.image}>
                          <div className={`gallery-image fit-${item.fit ?? "cover"}`}>
                            <img src={assetUrl(item.image)} alt={item.title} />
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
              <p>LEARNING / NEXT</p>
              <h3>{project.learning}</h3>
              <a href="#/">Projects一覧へ戻る ↑</a>
            </footer>
          </>
        )}
      </div>
    </article>
  );
}

import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionTitle
          index="03"
          eyebrow="PROJECTS"
          title="課題を捉え、体験を設計した4つの取り組み"
          description="対象ユーザー、本人の役割、用いた技術、成果を比較しながらご覧いただけます。"
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionTitle
          index="02"
          eyebrow="WORKS"
          title="Projects"
          description="課題を捉え、体験として形にした4つの取り組み。"
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

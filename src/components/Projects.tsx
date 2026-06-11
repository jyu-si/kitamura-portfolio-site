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
          title="考えて、つくって、確かめる。"
          description="制作、研究、組織活動。異なるアプローチで人の困りごとに向き合った4つの取り組みです。"
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

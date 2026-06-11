import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import Vision from "./components/Vision";
import { projects } from "./data/projects";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Vision />
        <Projects projects={projects} />
        <section className="details" aria-label="プロジェクト詳細">
          {projects.map((project) => (
            <ProjectDetail key={project.id} project={project} />
          ))}
        </section>
        <Contact />
      </main>
    </>
  );
}

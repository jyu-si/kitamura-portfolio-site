import { useEffect, useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import Vision from "./components/Vision";
import { projects } from "./data/projects";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const projectId = hash.match(/^#\/projects\/([^/]+)$/)?.[1];
  const activeProject = projects.find((project) => project.id === projectId);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeProject?.id]);

  if (activeProject) {
    return (
      <main className="project-page">
        <nav className="project-page-nav" aria-label="プロジェクト詳細ナビゲーション">
          <a href="#/" className="project-page-brand">
            <span />
            SHUJI KITAMURA
          </a>
          <a href="#/">PROJECTSへ戻る</a>
        </nav>
        <ProjectDetail project={activeProject} />
      </main>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Vision />
        <Projects projects={projects} />
      </main>
    </>
  );
}

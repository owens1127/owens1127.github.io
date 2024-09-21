import { ProjectsContext } from "@/context/projects";
import { projects } from "@/data/projects";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsContainer() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-center text-4xl font-bold">My Projects</h2>
      <ProjectsContext.Provider value={projects}>
        <ProjectsGrid />
      </ProjectsContext.Provider>
    </main>
  );
}

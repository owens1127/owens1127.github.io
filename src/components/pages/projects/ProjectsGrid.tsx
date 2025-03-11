import { useProjects } from "@/context/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = useProjects();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

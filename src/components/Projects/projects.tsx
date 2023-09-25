import "./projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectData } from "../ProjectCard/types";
import { useState, useEffect } from "react";

const Projects = () => {
  const [data, setData] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main className="project-page">
      <h1>Personal Projects</h1>
      <div className="projects">
        {data.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </main>
  );
};

export default Projects;

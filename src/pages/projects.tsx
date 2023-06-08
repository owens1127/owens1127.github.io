import "./projects.css";
import { Helmet } from "react-helmet";
import ProjectCard, { ProjectData } from "../components/ProjectCard";
import { useEffect, useState } from "react";

const Projects = () => {
  const [data, setData] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects - Owen Simpson</title>
      </Helmet>
      <main className="project-page">
        <h1>Personal Projects</h1>
        <div className="projects">
          {data.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;

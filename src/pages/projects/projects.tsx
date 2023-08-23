import "./projects.css";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import ProjectCard, {
  ProjectData,
} from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const [data, setData] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects | Owen Simpson</title>
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

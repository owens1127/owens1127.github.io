import "./styles/ProjectCard.css";

export type ProjectData = {
  name: string;
  description: string;
  url?: string;
  repository: string;
};

const ProjectCard = ({
  project: { name, description, url, repository },
}: {
  project: ProjectData;
}) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{name}</h2>
      <div className="project-description">
        {description.split("\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      <div className="project-links">
        {url && (
          <span className="project-url">
            <a href={url}>View Project</a>
          </span>
        )}
        <span className="project-url">
          <a href={repository}>Repository</a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;

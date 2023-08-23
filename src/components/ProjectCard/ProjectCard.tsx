import "./ProjectCard.css";

export type ProjectData = {
  name: string;
  description: string;
  url?: string;
  repository: string;
  images?: string[];
};

const ProjectCard = ({
  project: { name, description, url, repository, images },
}: {
  project: ProjectData;
}) => {
  return (
    <article className="project-card">
      <h2 className="project-title">{name}</h2>
      <div className="project-description">
        {description.split("\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      <div className="project-links">
        {url && (
          <div className="project-button">
            <a href={url}>View Project</a>
          </div>
        )}
        <div className="project-button">
          <a href={repository}>Repository</a>
        </div>
        {images && (
          <div className="project-button">
            <></>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;

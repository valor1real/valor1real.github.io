import React from "react";

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  delayClass,
}) => {
  return (
    <div className={`project-card reveal ${delayClass}`}>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>

      <div className="tech-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <a href={link} target="_blank" rel="noreferrer" className="project-link">
        Voir les détails
      </a>
    </div>
  );
};

export default ProjectCard;

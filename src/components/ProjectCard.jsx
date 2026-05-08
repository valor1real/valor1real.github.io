import React from "react";

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <div className="project-card">
      <h3 style={{ color: "var(--text-primary)", marginBottom: "10px" }}>
        {title}
      </h3>
      <p style={{ color: "var(--text-secondary)", flexGrow: 1 }}>
        {description}
      </p>

      <div className="tech-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "var(--accent-blue)",
          textDecoration: "none",
          fontWeight: "bold",
          marginTop: "auto",
        }}
      >
        Voir les détails →
      </a>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      title: "Nexted Ecosystem",
      description:
        "Plateforme éducative interactive avec une interface minimaliste. Objectif : fournir des ressources ciblées via une architecture React robuste.",
      technologies: ["React", "Figma", "UI/UX"],
      link: "#",
      delayClass: "delay-1",
    },
    {
      title: "Campus Rush",
      description:
        "Jeu 2D dynamique. Course contre la montre pour arriver à la fac. Implémentation directe et avancée des concepts de la Programmation Orientée Objet.",
      technologies: ["C++", "SFML Library", "POO"],
      link: "#",
      delayClass: "delay-2",
    },
    {
      title: "Prototypage Maker",
      description:
        "Exploration continue de l'architecture des systèmes embarqués et de l'Edge AI à travers la programmation bas niveau et les montages électroniques.",
      technologies: ["C", "Systèmes Embarqués", "Hardware"],
      link: "#",
      delayClass: "delay-3",
    },
  ];

  return (
    <section
      id="projects"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <h2
        className="reveal"
        style={{ fontSize: "2.5rem", marginBottom: "40px" }}
      >
        Mes <span className="gradient-text">Réalisations</span>
      </h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            delayClass={project.delayClass}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

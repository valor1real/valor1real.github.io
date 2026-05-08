import React from "react";
import "./App.css";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";

function App() {
  const projectsData = [
    {
      title: "Nexted Ecosystem",
      description:
        "Conception et développement d'une plateforme d'apprentissage destinée aux étudiants scientifiques et techniques. Objectif : fournir des ressources ciblées via une interface minimaliste.",
      technologies: ["Figma", "React", "UI/UX"],
      link: "#",
    },
    {
      title: "Campus Rush",
      description:
        "Jeu 2D dynamique développé dans le cadre académique. Le joueur incarne un étudiant devant atteindre la faculté avant la fin du chrono. Mise en application directe des concepts de la POO.",
      technologies: ["C++", "SFML Library", "POO"],
      link: "#",
    },
    {
      title: "Prototypage Matériel (Maker)",
      description:
        "Exploration continue de l'architecture des systèmes embarqués et de l'Edge AI à travers divers montages électroniques et programmation bas niveau.",
      technologies: ["C", "Embedded Systems", "Hardware"],
      link: "#",
    },
  ];

  return (
    <div className="container">
      <Header />

      <Skills />

      <Education />

      <section id="projects">
        <h2>Projets & Réalisations</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default App;

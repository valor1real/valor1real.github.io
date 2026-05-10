import React from "react";

const Skills = () => {
  return (
    <section id="skills" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <h2
        className="reveal"
        style={{ fontSize: "2.5rem", marginBottom: "40px" }}
      >
        Mon Arsenal <span className="gradient-text">Technique</span>
      </h2>

      <div className="bento-grid">
        <div className="bento-card reveal delay-1">
          <h3 className="bento-title">Système & Edge AI</h3>
          <p className="bento-desc">
            Programmation proche du métal et architecture matérielle.
          </p>

          <div className="skill-item">
            <div className="skill-info">
              <span>C / C++ (Bas Niveau)</span>
              <span>85%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" data-target="85%"></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span>Architecture Embarquée</span>
              <span>75%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" data-target="75%"></div>
            </div>
          </div>
        </div>

        <div className="bento-card reveal delay-2">
          <h3 className="bento-title">Design & Front-end</h3>
          <p className="bento-desc">
            Conception d'interfaces minimalistes centrées sur l'utilisateur.
          </p>

          <div className="skill-item">
            <div className="skill-info">
              <span>Figma (Prototypage & UI)</span>
              <span>90%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" data-target="90%"></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span>ReactJS / Web Dynamics</span>
              <span>80%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" data-target="80%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

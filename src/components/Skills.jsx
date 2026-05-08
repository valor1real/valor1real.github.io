import React, { useEffect } from "react";
import $ from "jquery";

const Skills = () => {
  useEffect(() => {
    $(".skill-bar-fill").each(function () {
      const targetWidth = $(this).attr("data-target");
      $(this).animate({ width: targetWidth }, 1500);
    });
  }, []);

  const skillsData = [
    { name: "ReactJS & Front-end", level: "70%" },
    { name: "UI/UX Design (Figma)", level: "65%" },
    { name: "C / C++ & Programmation Système", level: "15%" },
    { name: "Systèmes Embarqués & Edge AI", level: "5%" },
  ];

  return (
    <section id="skills">
      <h2>Compétences</h2>
      <div className="skills-list">
        {skillsData.map(({ name, level }, index) => (
          <div className="skill-container" key={index}>
            <div className="skill-header">
              <span>{name}</span>
              <span>{level}</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" data-target={level}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

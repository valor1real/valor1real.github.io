import React, { useEffect } from "react";
import $ from "jquery";

const Education = () => {
  useEffect(() => {
    $(".accordion-header")
      .off("click")
      .on("click", function () {
        $(".accordion-content").not($(this).next()).slideUp(300);
        $(".accordion-header").not($(this)).removeClass("active");

        $(this).next(".accordion-content").slideToggle(300);

        $(this).toggleClass("active");
      });
  }, []);

  const educationData = [
    {
      title: "Licence Sciences de l'Information (SINF)",
      date: "2024 - Présent",
      institution: "Faculté des Sciences Semlalia, Université Cadi Ayyad",
      description:
        "Actuellement en 4ème semestre. Étude approfondie des structures de données, de la programmation orientée objet, des mathématiques appliquées et du développement web.",
    },
    {
      title: "Baccalauréat",
      date: "Obtenu en 2024",
      institution: "Diplôme National",
      description:
        "Bases scientifiques solides et préparation à l'entrée dans l'enseignement supérieur pour les études d'ingénierie et de sciences exactes.",
    },
  ];

  return (
    <section id="education" className="section-padding">
      <h2 className="reveal section-title">
        Mon <span className="gradient-text">Parcours</span>
      </h2>

      <div className="accordion-container">
        {educationData.map((item, index) => (
          <div
            className={`accordion-item reveal delay-${index + 1}`}
            key={index}
          >
            <div className="accordion-header">
              <div className="accordion-title-group">
                <h3 className="accordion-title">{item.title}</h3>
                <span className="accordion-institution">
                  {item.institution}
                </span>
              </div>
              <div className="accordion-meta">
                <span className="date-badge">{item.date}</span>
                <span className="chevron">▼</span>
              </div>
            </div>

            <div className="accordion-content" style={{ display: "none" }}>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

import React, { useEffect } from "react";
import $ from "jquery";

const Education = () => {
  useEffect(() => {
    $(".accordion-header")
      .off("click")
      .on("click", function () {
        $(".accordion-content").not($(this).next()).slideUp();
        $(this).next(".accordion-content").slideToggle();
      });
  }, []);

  const educationData = [
    {
      title: "Licence Sciences de l'Information (SINF)",
      dateBadge: "2024 - Présent",
      accordionTitle: "Faculté des Sciences Semlalia, Université Cadi Ayyad.",
      accordionDescription:
        "Actuellement en 4ème semestre. Étude approfondie des structures de données, de la programmation orientée objet, des mathématiques appliquées et du développement web.",
    },
    {
      title: "Baccalauréat",
      dateBadge: "Obtenu en 2024",
      accordionTitle: "Diplôme du Baccalauréat.",
      accordionDescription:
        "Bases scientifiques et préparation à l'entrée dans l'enseignement supérieur pour les études d'ingénierie et de sciences.",
    },
  ];

  return (
    <section id="education">
      <h2>Formation & Parcours</h2>

      {educationData.map(
        ({ title, dateBadge, accordionTitle, accordionDescription }, index) => {
          return (
            <div className="accordion-item" key={index}>
              <div className="accordion-header">
                <span>{title}</span>
                <span className="date-badge">{dateBadge}</span>
              </div>
              <div className="accordion-content" style={{ paddingTop: "16px" }}>
                <p>{accordionTitle}</p>
                <p>{accordionDescription}</p>
              </div>
            </div>
          );
        },
      )}
    </section>
  );
};

export default Education;

import React from "react";

const Header = () => {
  return (
    <header className="hero-header">
      <img src="/profilePic.jpg" alt="Mouad BOUKDIR" className="profile-pic" />

      <div className="header-text-container">
        <h1>Mouad BOUKDIR</h1>
        <h3
          style={{
            color: "var(--text-muted)",
            fontWeight: "400",
            fontSize: "1.2rem",
            margin: "0 0 15px 0",
          }}
        >
          Étudiant en Sciences de l'Information & Développeur
        </h3>

        <div className="social-links">
          <a href="mailto:m.boukdir1232@uca.ac.ma">Email</a>
          <a
            href="https://www.linkedin.com/in/valor-virtuous-642b51389"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/valor1real"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <p className="bio-text">
          Actuellement en 4ème semestre (SINF) à la Faculté des Sciences
          Semlalia (UCA). Je me spécialise dans la programmation système
          (C/C++), le développement de solutions logicielles et la culture
          "Maker". Passionné par l'Edge AI et le design d'interfaces utilisateur
          (Figma), j'aime concevoir des produits allant de l'architecture bas
          niveau jusqu'à l'expérience utilisateur finale, tout en gardant un œil
          vers les cieux pour mon projet de devenir pilote.
        </p>
      </div>
    </header>
  );
};

export default Header;

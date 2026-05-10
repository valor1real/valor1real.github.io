import React from "react";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
    >
      <div
        className="hero-container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
          width: "100%",
        }}
      >
        <div className="hero-text" style={{ flex: 1 }}>
          <p
            className="reveal"
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              marginBottom: "10px",
            }}
          >
            Bonjour, je suis
          </p>
          <h1
            className="reveal delay-1"
            style={{
              fontSize: "4rem",
              margin: "0 0 10px 0",
              lineHeight: "1.1",
            }}
          >
            <span className="gradient-text">Mouad Boukdir.</span>
          </h1>
          <h2
            className="reveal delay-2"
            style={{
              color: "var(--text-primary)",
              fontSize: "2rem",
              fontWeight: "600",
              margin: "0 0 20px 0",
            }}
          >
            Software Engineer & UI/UX Designer
          </h2>
          <p
            className="reveal delay-3 bio-pitch"
            style={{
              color: "var(--text-muted)",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              maxWidth: "600px",
              marginBottom: "30px",
            }}
          >
            Je conçois des expériences numériques optimisées. Fasciné par l'Edge
            AI et la culture Maker, j'allie la rigueur de la programmation
            système (C/C++) à la créativité du design d'interface (Figma).
          </p>

          <div
            className="reveal delay-3 hero-actions"
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <a href="#projects" className="btn-primary">
              Voir mes projets
            </a>
            <div className="social-links">
              <a
                href="https://github.com/valor1real"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/valor-virtuous-642b51389"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="reveal delay-2 hero-image-wrapper">
          <img
            src="/profilePic.jpg"
            alt="Mouad Boukdir"
            className="hero-profile-pic"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

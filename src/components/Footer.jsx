import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Conçu et développé par{" "}
          <span className="gradient-text">Mouad Boukdir</span> © 2026
        </p>
        <p className="footer-subtext">
          Software Engineering • UI/UX Design • Maker
        </p>
        <div className="footer-socials">
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
    </footer>
  );
};

export default Footer;

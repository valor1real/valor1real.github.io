import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="nav-logo">
          MB
        </a>

        <div className="nav-links">
          <a href="#skills" className="nav-link">
            Compétences
          </a>
          <a href="#education" className="nav-link">
            Parcours
          </a>
          <a href="#projects" className="nav-link">
            Projets
          </a>
          <a href="#contact" className="nav-link btn-nav">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

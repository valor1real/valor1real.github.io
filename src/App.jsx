import React, { useEffect } from "react";
import $ from "jquery";
import "./App.css";

// Import de tous les composants
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Le moteur jQuery reste le même
  useEffect(() => {
    const checkVisibility = () => {
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();

      $(".reveal").each(function () {
        const elementTop = $(this).offset().top;
        const triggerPoint = scrollTop + windowHeight - 50;

        if (elementTop < triggerPoint) {
          $(this).addClass("active");

          $(this)
            .find(".skill-bar-fill")
            .each(function () {
              const target = $(this).attr("data-target");
              $(this).css("width", target);
            });
        }
      });
    };

    $(window).on("scroll", checkVisibility);
    checkVisibility();

    return () => $(window).off("scroll", checkVisibility);
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />

      <main className="main-content">
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

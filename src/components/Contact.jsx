import React, { useEffect, useRef } from "react";
import $ from "jquery";

const Contact = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const $form = $(formRef.current);

    $form.on("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      $(".error-msg").slideUp(200, function () {
        $(this).remove();
      });
      $(".form-input").css("border-color", "var(--border-glass)");

      const name = $("#name").val().trim();
      const email = $("#email").val().trim();
      const message = $("#message").val().trim();

      const showError = (selector, msg) => {
        $(selector).css("border-color", "#ff4d4d");
        $(selector).after(
          `<div class="error-msg" style="color: #ff4d4d; font-size: 0.85rem; margin-top: 8px; display: none;">${msg}</div>`,
        );
        $(selector).next(".error-msg").slideDown(300);
        isValid = false;
      };

      if (name === "") showError("#name", "Veuillez entrer votre nom.");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "" || !emailRegex.test(email)) {
        showError("#email", "Veuillez entrer une adresse email valide.");
      }

      if (message === "")
        showError("#message", "Votre message ne peut pas être vide.");

      if (isValid) {
        const $btn = $(this).find("button[type='submit']");
        const originalText = $btn.text();

        $btn.text("Message envoyé !").css({
          "background-color": "#28a745",
          "border-color": "#28a745",
          color: "#fff",
          "box-shadow": "0 0 15px rgba(40, 167, 69, 0.4)",
        });

        setTimeout(() => {
          $btn.text(originalText).removeAttr("style");
          $form[0].reset();
        }, 3000);
      }
    });

    return () => $form.off("submit");
  }, []);

  return (
    <section id="contact" className="section-padding">
      <h2 className="reveal section-title">
        Me <span className="gradient-text">Contacter</span>
      </h2>

      <div className="bento-card reveal delay-1 contact-container">
        <div className="contact-info">
          <div className="contact-info-container">
            <h3 className="contact-heading">Travaillons ensemble.</h3>
            <p className="contact-desc">
              Une idée de projet, une question sur mes compétences en C++ ou sur
              mes designs Figma ? N'hésitez pas à m'envoyer un message.
            </p>
          </div>
          <a href="mailto:m.boukdir1232@uca.ac.ma" className="contact-email">
            <span className="email-icon">✉</span> m.boukdir1232@uca.ac.ma
          </a>
        </div>

        <div className="contact-form-wrapper">
          <form ref={formRef} className="contact-form" noValidate>
            <div className="form-group">
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Votre nom complet"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Votre adresse email"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                className="form-input"
                rows="5"
                placeholder="Parlez-moi de votre projet..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

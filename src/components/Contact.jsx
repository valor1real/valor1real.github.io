import React, { useEffect, useRef } from "react";
import $ from "jquery";

const Contact = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const $form = $(formRef.current);

    $form.on("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      $(".error-message").remove();
      $(".form-group input, .form-group textarea").css(
        "border-color",
        "var(--text-muted)",
      );

      const name = $("#name").val();
      const email = $("#email").val();
      const message = $("#message").val();

      if (name.trim() === "") {
        $("#name").after(
          '<span class="error-message">Veuillez entrer votre nom.</span>',
        );
        $("#name").css("border-color", "#ff4d4d");
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.trim() === "" || !emailRegex.test(email)) {
        $("#email").after(
          '<span class="error-message">Veuillez entrer un email valide.</span>',
        );
        $("#email").css("border-color", "#ff4d4d");
        isValid = false;
      }

      if (message.trim() === "") {
        $("#message").after(
          '<span class="error-message">Le message ne peut pas être vide.</span>',
        );
        $("#message").css("border-color", "#ff4d4d");
        isValid = false;
      }

      if (isValid) {
        alert("Message validé par jQuery et prêt à être envoyé !");
        $form[0].reset();
      }
    });

    return () => {
      $form.off("submit");
    };
  }, []);

  return (
    <section id="contact">
      <h2>Me Contacter</h2>
      <form
        ref={formRef}
        className="contact-form"
        style={{
          minWidth: "100%",
        }}
      >
        <div className="form-group">
          <input type="text" id="name" placeholder="Votre Nom complet" />
        </div>
        <div className="form-group">
          <input type="email" id="email" placeholder="Votre adresse Email" />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            rows="6"
            placeholder="Votre message..."
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Envoyer le message
        </button>
      </form>
    </section>
  );
};

export default Contact;

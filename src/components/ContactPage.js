import React from "react";
import ContactForm from "./ContactForms/ContactForm";

const ContactPage = () => {
  return (
    <main className="contact-section">
      <div className="container">
        <h2>kontakt</h2>
        <p>
          Zapraszamy do kontaktu telefonicznego:{" "}
          <span className="contact-details">519 872 216</span>
        </p>
        <p> lub korzystając z poniższego formularza kontaktowego</p>
        <p>
          albo pisząc bezpośrednio na nasz adres email: fcmeble@gmail.com
        </p>
        <ContactForm />
        <p>Meble na zamówienie wykonujemy głównie na terenie Poznania.</p>
        <div className="decoration-1"></div>
      </div>
    </main>
  );
};

export default ContactPage;

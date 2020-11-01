import React from 'react';
import ContactForm from './ContactForms/ContactForm'

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <p>Wszelkie pytania oraz zamówienia prosimy kierować na adres:</p>
        <p className="contact-details">fcmeble@gmail.com</p>
        <p>lub poprzez wypełnienie poniższego formularza kontaktowego</p>
        <p>zachęcamy również do  kontaktu telefonicznego:</p>
        <p className="contact-details">519 872 216</p>
        <p>
          Meble na zamówienie wykonujemy głównie na terenie Poznania.
        </p>
        <p>Zapraszamy do korzystania z naszej oferty!</p>
      </div>
      <ContactForm/>
    </section>
  );
}

export default ContactPage;

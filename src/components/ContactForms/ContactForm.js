import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log("clicked");

    const form = e.target;
    // console.log(form);
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
        setTimeout(function () {
          setStatus("");
          setEmail("");
          setMessage("");
        }, 2000);
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isInvalid =
    message.length <= 150 ||
    !emailValidation.test(email);

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/mwkwpbjl"
      method="POST"
      className="contact-form"
    >
      
      <input
        type="email"
        placeholder={"Twój email (min. 7 znaków + @)"}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      
      <textarea
        name="textArea"
        className="project-summery"
        placeholder={"W czym możemy Tobie pomóc? (Wiadomość powinna mieć przynajmniej 150 znaków)"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button disabled={isInvalid} className="submit-project btn-2">Wyślij wiadomość</button>

      <div className="submit">
        {status === "SUCCESS" && (
          <p className="feedback-inf">
            Dziękujemy za przesłanie do nas wiadomości &#9786;
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

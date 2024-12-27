import React, { useState } from "react";
import "../styles/Contact.css";
import "../App.css";
import ContactImage from "../assets/profile/contactimage.png";

function Contact({ darkMode, setDarkMode }) {
  const [result, setResult] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsVisible(true);
    setFadeOut(false);

    const formData = new FormData(event.target);

    formData.append("access_key", "8a671c3e-9f77-4dab-9973-64847f9481b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent");
      setTimeout(() => {
        setFadeOut(true);
      }, 2000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => {
        setFadeOut(true);
      }, 2000);
    }
  };

  return (
    <div id="section-contact" className="contact">
      <h3
        className={`contact-subheading ${
          darkMode ? "" : "contact-subheading--light"
        }`}
      >
        Contact
      </h3>
      <hr
        className={`contact-subheading-line ${
          darkMode ? "" : "contact-subheading-line--light"
        }`}
      />

      <div className="contact-content">
        <form className="contact-form" onSubmit={onSubmit}>
          <label
            className={`contact-form-label ${
              darkMode ? "" : "contact-form-label--light"
            }`}
          >
            Name
          </label>
          <input
            className="contact-form-section"
            type="text"
            name="name"
            required
          />
          <br />
          <label
            className={`contact-form-label ${
              darkMode ? "" : "contact-form-label--light"
            }`}
          >
            Email
          </label>
          <input
            className="contact-form-section"
            type="email"
            name="email"
            required
          />
          <br />
          <label
            className={`contact-form-label ${
              darkMode ? "" : "contact-form-label--light"
            }`}
          >
            Message
          </label>
          <textarea
            className="contact-form-text-section"
            name="message"
            rows="10"
            required
          />
          <br />
          <button className="contact-form-button" type="submit">
            Send
          </button>
        </form>

        {isVisible && (
          <div className={`result-message ${fadeOut ? "fade-out" : ""}`}>
            {result}
          </div>
        )}

        <img className="contact-image" src={ContactImage} alt="contact" />
      </div>
    </div>
  );
}

export default Contact;

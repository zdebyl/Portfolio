import React, {useState} from 'react'
import '../styles/Contact.css'
import '../App.css'
import ContactImage from '../assets/profile/contactimage.png';

function Contact() {
  const [result, setResult] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // To control the fading effect

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsVisible(true);
    setFadeOut(false); // Reset fadeOut state

    const formData = new FormData(event.target);

    formData.append("access_key", "8a671c3e-9f77-4dab-9973-64847f9481b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent"); // Show success message
      setTimeout(() => {
        setFadeOut(true); // Trigger fade-out after 2 seconds
      }, 2000); // Keep "Sent" visible for 2 seconds before fading out
      event.target.reset(); // Reset the form
    } else {
      console.log("Error", data);
      setResult(data.message); // Show error message
      setTimeout(() => {
        setFadeOut(true); // Trigger fade-out after 2 seconds
      }, 2000); // Keep error message visible for 2 seconds before fading out
    }
  };

  return (
    <div id='section-contact' className='contact'>
      <h3 className='contact-subheading'>Contact</h3>
      <hr className='contact-subheading-line'/>

      <div className='contact-content'>
        <form className='contact-form' onSubmit={onSubmit}>
          <label className='contact-form-label'>Name</label>
          <input
            className='contact-form-section'
            type="text"
            name="name"
            required
          />
          <br/>
          <label className='contact-form-label'>Email</label>
          <input
              className='contact-form-section'
              type="email"
              name="email"
              required
          />
          <br/>
          <label className='contact-form-label'>Message</label>
          <textarea
              className='contact-form-text-section'
              name="message"
              rows="10"
              required
          />
          <br/>
          <button className='contact-form-button' type="submit">Send</button>
        </form>
        
        {isVisible && (
          <div className={`result-message ${fadeOut ? 'fade-out' : ''}`}>
            {result}
          </div>
        )}

        <img className='contact-image' src={ContactImage} alt="contact"/>
      </div>

    </div>
  )
}

export default Contact
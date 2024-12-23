import React from 'react'
import '../styles/Contact.css'
import '../App.css'
import ContactImage from '../assets/contactimage.png';

function Contact() {
  return (
    <div id='section-contact' className='contact'>
      <h3 className='contact-subheading'>Contact</h3>
      <hr className='contact-subheading-line'/>

      <div className='contact-content'>
        <form className='contact-form'>
          <label className='contact-form-label'>Name</label>
          <input
            className='contact-form-section'
            type="text"
            name="name"
          />
          <br/>
          <label className='contact-form-label'>Email</label>
          <input
              className='contact-form-section'
              type="email"
              name="email"
          />
          <br/>
          <label className='contact-form-label'>Message</label>
          <textarea
              className='contact-form-text-section'
              name="message"
              rows="10"
          />
          <br/>
          <button className='contact-form-button' type="submit">Send</button>
        </form>

        <img className='contact-image' src={ContactImage} alt="contact"/>
      </div>

    </div>
  )
}

export default Contact
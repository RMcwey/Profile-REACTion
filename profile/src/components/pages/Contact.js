import React from 'react';

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  export default function Contact () {
  return (
    <div>
      <form className="contact-form">
        <div className='contact-form-text'>
          <h3> Contact Me </h3>
          <h4> Name: </h4>
          <input
            type="text"
            placeholder="Please enter your name"
            name="text"
            className="name-input"
          ></input>
          <h4> Your Email:</h4>
          <input
            type="text"
            placeholder="Please enter your email"
            name="text"
            className="email-input"
          ></input>
          <h4> Subject: </h4>
          <input
            type="text"
            placeholder="Please enter your subject"
            name="text"
            className="subject-input"
          ></input>
          <h4> Your Message: </h4>
          <textarea
            type="text"
            placeholder="Please enter your message here"
            name="text"
            className="message-input"
          ></textarea>
          <button className="submit-button">Contact Ross</button>
        </div>
      </form>
    </div>
  ) 
}

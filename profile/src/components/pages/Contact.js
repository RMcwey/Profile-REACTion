import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

function shoot() {

    alert("Email sent to Ross McWey");
  }
  
  export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm( 'service_6po1dcc', 'template_9k26hop', form.current, '7OQXkquPI2Xhv6ovL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
   console.log(form, "form")
  return (
    <div className='contact-container'>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className='contact-form-text'>
          <h3> Contact Me </h3>
          <h4> Name: </h4>
          <input
            type="text"
            placeholder="Please enter your name"
            name="user_name"
            className="name-input"
          ></input>
          <h4> Your Email:</h4>
          <input
            type="text"
            placeholder="Please enter your email"
            name="user-email"
            className="email-input"
          ></input>
          <h4> Subject: </h4>
          <input
            type="text"
            placeholder="Please enter your subject"
            name="subject"
            className="subject-input"
          ></input>
          <h4> Your Message: </h4>
          <textarea
            type="text"
            placeholder="Please enter your message here"
            name="message"
            className="message-input"
          ></textarea>
          <input onClick={shoot} className="submit-button" type="submit" value="Send"/>
        </div>
      </form>
    </div>
  ) 
}

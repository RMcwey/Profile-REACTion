import React, { useState } from 'react';

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  export default function Contact () {
  return (
    <div>
      <form className="contact-form">
        <input
          type="text"
          placeholder="Please enter your name"
          name="text"
          className="name-input"
        ></input>
        <input
          type="text"
          placeholder="Please enter your email"
          name="text"
          className="email-input"
        ></input>
        <input
          type="text"
          placeholder="Please enter your message here"
          name="text"
          className="message-input"
        ></input>
        <button className="submit-button">Contact Ross</button>
      </form>
    </div>
  ) 
}

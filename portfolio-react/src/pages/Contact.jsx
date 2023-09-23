// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import "./RestaurantContact.css";

const RestaurantContact = () => {
  return (
    <div className="restaurant-contact-container">
      <h2 className="page-heading">Contact Us</h2>
      <p className="contact-description">
        If you have any questions, feedback, or need help with the platform,
        feel free to reach out to us. We're here to help!
      </p>

      <div className="contact-details">
        <p>
          <strong>📍 Address:</strong> Foodporter HQ, 123 Street Name, Mumbai, India
        </p>
        <p>
          <strong>📞 Phone:</strong> +91 98765 43210
        </p>
        <p>
          <strong>📧 Email:</strong> support@foodporter.com
        </p>
      </div>

      <div className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantContact;

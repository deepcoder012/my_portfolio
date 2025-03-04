import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // You can integrate any email-sending service here
    // For now, just simulate a success response
    setTimeout(() => {
      setIsSubmitting(false);
      setResponseMessage("Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

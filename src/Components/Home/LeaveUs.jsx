import React from "react";
import "./leaveUs.css"; // Custom CSS file for styling
import touch from '../Assests/touch.png'

const LeaveUs = () => {

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };
  
  return (
    <div className="contact-container">
      <h2 className="contact-title">LEAVE US A MESSAGE</h2>
      <div className="contact-content">
        {/* Illustration Section */}
        <div className="contact-illustration">
          <img
            src={touch}
            alt="Contact Illustration"
            className="illustration-img"
          />
        </div>

        {/* Form Section */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="E-mail"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveUs;

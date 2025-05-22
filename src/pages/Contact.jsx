import React, { useState, useRef } from "react";
import "./Contact.css";
import Footer from "../components/Footer";
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: null });
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_vhwtpwz', // Replace with your EmailJS service ID
      'template_xoezjbl', // Replace with your EmailJS template ID
      form.current,
      'SL6hOs8UZ3QkzA_9Y' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      setFormStatus({ submitted: false, loading: false, error: "Failed to send your message. Please try again." });
    });
  };

  // Function to handle email click
  const handleEmailClick = (event) => {
    const email = "gaurichavan2005@gmail.com";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      event.preventDefault();
      window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    }
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page-content">
        <div className="contact-header">
          <h1 className="contact-title">संपर्क साधा</h1>
          <p className="contact-subtitle">मला तुमच्याकडून ऐकायला आवडेल. कृपया खालील फॉर्म भरा किंवा माझ्या संपर्क माहितीद्वारे थेट संपर्क साधा.</p>
        </div>

        <div className="contact-section">
          {/* Contact Information Card */}
          <div className="contact-info-card">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-text">Feel free to reach out using any of the following methods:</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>Kalaprasad, Saicity, Yeola Road,<br />Kopargaon, Ahilyanagar,<br />Maharashtra</p>
                </div>
              </div>
              
              <div className="contact-method">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:gaurichavan2005@gmail.com" onClick={handleEmailClick} className="contact-link">
                    gaurichavan2005@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <Phone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+917020886516" className="contact-link">
                    +91 70208 86516
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-feedback">
              <h4>Feedback</h4>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScFj_rrfvEfocgyNujV2jJRYOPVBmGHr0s_Lo_zd6N2Oa0aIg/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                className="feedback-link"
              >
                अभिप्राय देण्यासाठी येथे क्लिक करा<br />(Click here to give feedback)
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            {formStatus.submitted ? (
              <div className="success-message">
                <CheckCircle className="success-icon" />
                <h3>Thank you for your message!</h3>
                <p>I'll get back to you as soon as possible.</p>
                <button 
                  className="send-another-btn"
                  onClick={() => setFormStatus({ submitted: false, loading: false, error: null })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send a Message</h3>
                
                {formStatus.error && (
                  <div className="error-message">
                    <AlertCircle className="error-icon" />
                    <p>{formStatus.error}</p>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn" disabled={formStatus.loading}>
                  {formStatus.loading ? "Sending..." : "Send Message"} 
                  {!formStatus.loading && <Send className="send-icon" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
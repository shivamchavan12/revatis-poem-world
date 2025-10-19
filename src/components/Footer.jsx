import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/shivamchavan12", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/shivam-chavan-07940728b/", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/kalakavyakunj?igsh=MWdsMnc3OTRpM253Yw==", label: "Instagram" },
    { icon: <FaYoutube />, url: "https://youtube.com/@gaurichavan1457?si=uwzo-g3-1iC6YENX", label: "YouTube" },
    { icon: <FaEnvelope />, url: "mailto:shivamchavan0512@gmail.com", label: "Email" }
  ];
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Poems", path: "/poems" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Branding Section */}
          <div className="footer-info">
            <h3 className="footer-name">Revati Sandip Chavan</h3>
            <p className="footer-tagline">Creating beautiful web experiences</p>
            <div className="footer-description">
              <p>Web Developer | UI/UX Designer | Poet</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer-nav-item">
                  <a href={link.path} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-heading">Get In Touch</h4>
            <p className="contact-text">Feel free to reach out for collaborations or inquiries</p>
            <a 
              href="mailto:shivamchavan0512@gmail.com" 
              className="contact-email"
            >
              shivamchavan0512@gmail.com
            </a>
            <div className="contact-address">
              <p>Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Revati Sandip Chavan. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label}
                className="social-icon-link"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="attribution">
            Designed by <a href="#" className="footer-link">Shivam Sandip Chavan</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
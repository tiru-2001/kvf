import React from 'react';

import { FaInstagram, FaLinkedinIn,  FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Contact Us for Compliance</h2>
          <p>
          If you have any compliance-related inquiries or concerns, please reach out to us. We are committed to maintaining the highest standards of compliance and transparency.
          </p>
          <div className="social-icons">
            <a href="https://instagram.com">
              <FaInstagram size={24} color="#322c12" />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedinIn size={24} color="#322c12" />
            </a>
            <a href="https://twitter.com">
              <FaTwitter size={24} color="#322c12" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="contact-box">
            <FaPhone size={24} color="#ffffff" />
            <a>+91 XXX-XXX-XXXX</a>
          </div>
          <div className="contact-box">
            <FaEnvelope size={24} color="#ffffff" />
            <a href="mailto:contact@kvf.com">contact@kvf.com</a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy;2024 KVF. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

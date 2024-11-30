// src/components/Contact.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; // LeetCode icon
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <a
          href="mailto:santhoshkannan525@gmail.com"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={24} />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/santhosh-pandiyan-k-42b771290/"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/SANDY655"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href="https://leetcode.com/SANTHOSH_KANNAN_6"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode size={24} />
          <span>LeetCode</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;

// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container center">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Let's work together.</h2>
          <p>Creating something great always starts with a small conversation.</p>

          <a href="mailto:santhoshkannan525@gmail.com" className="email-link">
            <span>santhoshkannan525@gmail.com</span>
            <ArrowUpRight size={24} />
          </a>
        </motion.div>

        <footer className="footer-minimal">
          <p>&copy; 2024 Santhosh Pandiyan. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/SANDY655">GitHub</a>
            <a href="https://www.linkedin.com/in/santhosh-pandiyan-k-42b771290/">LinkedIn</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

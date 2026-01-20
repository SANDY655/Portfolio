import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">

        <motion.div
          className="hero-avatar"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/projects/profile.jpg" alt="Santhosh" />
          <div className="status-badge">Available for work</div>
        </motion.div>

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h1>
            Hi I'm Santhosh. <br />
            <span className="text-secondary">A Full Stack Developer.</span>
          </h1>

          <p>
            I build scalable, high-performance web applications,
            bridging the gap between front-end elegance and back-end robustness.
          </p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

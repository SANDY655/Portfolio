// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: 'FreshHarvest',
    category: 'Full Stack',
    image: '/images/projects/freshHarvest.png',
    link: 'https://github.com/SANDY655/FreshHarvest.git'
  },
  {
    title: 'E-Commerce App',
    category: 'Mobile / Web',
    image: '/images/projects/e-com.png',
    link: 'https://github.com/SANDY655/MERN-S.git',
  },
  {
    title: 'Chatter Box',
    category: 'Realtime Communication',
    image: '/images/projects/chatterbox.png',
    link: 'https://github.com/SANDY655/ChatterBox.git',
  },
  {
    title: 'Barcode Generator',
    category: 'Utility Tool',
    image: '/images/projects/barcode.png',
    link: 'https://github.com/SANDY655/Basic-URL-Barcode-Application.git',
  },
  {
    title: 'Train Ticket Booking',
    category: 'System Design',
    image: '/images/projects/train-ticket-booking.jpg',
    link: 'https://github.com/SANDY655/TRAIN.git',
  },
  {
    title: 'Media Influencer Site',
    category: 'Portfolio',
    image: '/images/projects/smi.png',
    link: 'https://github.com/SANDY655/PROJECT-1.git',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="work-section">
      <div className="container">

        {/* Projects */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Selected Works</motion.h2>
          <div className="line"></div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="overlay">
                  <ExternalLink color="#fff" size={32} />
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;

// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projectsData = [
  
    {
      title: 'Barcode Generator',
      description: 'A Barcode Generation and Tracking Web Application lets users create barcodes from product details, track their usage, and download them as images. It’s ideal for inventory management and product tracking.',
      image: '/images/projects/barcode.png', // Replace with your actual image file name
      link: 'https://github.com/SANDY655/Basic-URL-Barcode-Application.git',
    },
    {
      title: 'Train Ticket Booking',
      description: 'A Train Ticket Reservation System built with React allows users to search for trains, view available seats, and book tickets. It includes features for managing bookings and user authentication for a personalized experience.',
      image: '/images/projects/train-ticket-booking.jpg', // Replace with your actual image file name
      link: 'https://github.com/SANDY655/TRAIN.git',
    },
    {
      title: 'Website for Media Influencer',
      description: 'A media influencer website showcases their brand, portfolio, and content, featuring a bio, past work, social links, and a contact form for collaborations—all in a visually appealing design.',
      image: '/images/projects/smi.png', // Replace with your actual image file name
      link: 'https://github.com/SANDY655/PROJECT-1.git',
    },

  
];

const certificationsData = [
  {
    title: 'Programming in Java',
    issuer: 'NPTEL',
    date: 'July-Oct 2024',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7267866303414059008/',
  },
  {
    title: 'Build Your Own GPTs',
    issuer: 'LinkedIn Learning',
    date: 'March 2024',
    link: 'https://www.linkedin.com/learning/certificates/6a07095cb23959b5121e13282ca6449d125d52022d0e4f303f0e785978e26c4a',
  },
  {
    title: 'Foundations of User Experience',
    issuer: 'Coursera',
    date: 'Feb 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/5VPBM5X4J8AS?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    title: 'Figma Essential Training: The Basics',
    issuer: 'LinkedIn Learning',
    date: 'Feb 2024',
    link: 'https://www.linkedin.com/learning/certificates/e7678816afe0930e06f63178adc280a6fd218bb1f3e7776a49b332ed5d32752b',
  },
  {
    title: 'Learning the JavaScript Language',
    issuer: 'LinkedIn Learning',
    date: 'Mar 2024',
    link: 'https://www.linkedin.com/learning/certificates/a8cc58e0264dcffa4219b9a996976c9f0782c954a30c03071fe4e76f077a381a',
  },
];

const Projects = () => {
  return (
    <div>
      <section id="projects" className="projects">
        <h2> Projects that I have worked in</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="certifications">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certificationsData.map((certification, index) => (
            <div key={index} className="certification-card">
              <h3>{certification.title}</h3>
              <p>
                Issued by: <span>{certification.issuer}</span>
              </p>
              <p>
                Date: <span>{certification.date}</span>
              </p>
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-link"
              >
                View Certification
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

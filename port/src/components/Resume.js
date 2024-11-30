// src/components/Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        
        <a
          href="images\projects\Santhosh's Resume.pdf" // Replace with the actual path to your resume
          download
          className="resume-button"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;

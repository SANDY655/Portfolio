// src/components/Resume.js
import React from 'react';
import { FileText } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container center">
        <a
          href="/images/projects/Santhosh's Resume.pdf"
          download
          className="resume-link"
        >
          <FileText size={20} />
          <span>Download Full Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Resume;

// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/images/projects/profile.jpg" // Replace with your profile image
            alt="Profile"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm Santhosh Pandiyan,a passionate web developer with expertise in creating
            responsive, user-friendly web applications. I enjoy solving complex
            problems, learning new technologies, and building projects that
            make a difference.
          </p>
          <p>
            When I'm not coding, I love exploring open-source projects, solving
            coding challenges on LeetCode, and connecting with other developers
            on GitHub and LinkedIn.
          </p>
          <a
            href="mailto:santhoshkannan525@gmail.com" // Replace with your email
            className="about-button"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

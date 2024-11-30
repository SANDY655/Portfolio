// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'CSS', level: 'Basic' },
  { name: 'HTML', level: 'Advanced' },
  { name: 'Git', level: 'Basic' },
  { name: 'LeetCode Problem Solving', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

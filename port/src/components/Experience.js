// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
    {
        role: 'FullStack Developer Intern',
        company: 'GetLanded',
        location: 'Liverpool (Online)',
        period: 'Dec 2025 - Present',
        description: 'Contributing to the development of modern web interfaces, ensuring high performance and responsiveness.'
    },
    {
        role: 'Frontend Developer Intern',
        company: 'Starlabs',
        location: 'Dhanbad, Jharkhand (Online)',
        period: 'Jun 2025 - Aug 2025',
        description: 'Worked on full-stack web solutions, collaborating with a remote team to deliver scalable features.'
    },
    {
        role: 'Intern',
        company: 'Firebee',
        location: 'Madurai (Offline)',
        period: 'May 2025 (1 Month)',
        description: 'Gained hands-on experience in software development life cycle and participated in on-site project deployments.'
    },
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.div
                    className="section-header center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Experience</h2>
                </motion.div>

                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{exp.period}</div>
                            <div className="timeline-content">
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <div className="timeline-location">{exp.location}</div>
                                <p>{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

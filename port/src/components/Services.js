// src/components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layers } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        icon: <Palette size={32} />,
        title: 'Frontend Architecture',
        description: 'Building responsive, accessible, and performant user interfaces using React, Next.js, and modern CSS.'
    },
    {
        icon: <Layers size={32} />,
        title: 'Backend Engineering',
        description: 'Designing robust APIs, managing databases, and ensuring server-side logic efficiency with Node.js.'
    },
    {
        icon: <Code size={32} />,
        title: 'Full Stack Solutions',
        description: 'Delivering end-to-end web solutions, from database design to deployment and CI/CD integration.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <motion.div
                    className="section-header center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>What I can offer</h2>
                </motion.div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

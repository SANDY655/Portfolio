import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Reusing existing About styles or create new if needed

const AboutSection = () => {
    return (
        <section id="about" className="about-section" style={{ padding: '100px 0' }}>
            <div className="container">
                <motion.div
                    className="section-header center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>About Me</h2>
                    <div className="line" style={{ width: '60px', height: '3px', background: 'var(--text-color)', margin: '0 auto' }}></div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: 'var(--secondary-text)' }}
                >
                    <p style={{ marginBottom: '24px' }}>
                        I am a passionate Full Stack Developer with a keen eye for detail and a drive for creating seamless digital experiences.
                        With expertise in modern JavaScript frameworks like React and Node.js, I build applications that are not only functional but also performant and scalable.
                    </p>
                    <p>
                        My journey bridges the gap between design and engineering, ensuring that every pixel serves a purpose and every line of code adds value.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;

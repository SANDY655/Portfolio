// src/components/SocialSidebar.js
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Moon } from 'lucide-react';
import './SocialSidebar.css';

const socialLinks = [
    { icon: <Github size={18} />, label: 'Github', href: 'https://github.com/SANDY655' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/santhosh-pandiyan-k-42b771290/' },
    { icon: <Code size={18} />, label: 'LeetCode', href: 'https://leetcode.com/u/Santhosh_Pandiyan/' },
    { icon: <Mail size={18} />, label: 'Email', href: 'mailto:santhoshkannan525@gmail.com' },
];

const SocialSidebar = ({ theme, toggleTheme }) => {
    return (
        <motion.div
            className="dribbble-sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
        >
            <div className="sidebar-group">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-item"
                    >
                        {link.icon}
                        <span className="tooltip">{link.label}</span>
                    </a>
                ))}
            </div>

            <div className="sidebar-divider"></div>

            <div className="sidebar-group">
                <div className="sidebar-item mode-toggle" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                    {theme === 'dark' ? <Moon size={18} /> : <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#ffcc00', boxShadow: '0 0 10px #ffcc00' }}></div>}
                    <span className="tooltip">Switch Theme</span>
                </div>
            </div>
        </motion.div>
    );
};

export default SocialSidebar;

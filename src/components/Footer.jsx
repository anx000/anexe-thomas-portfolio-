import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Anexe Thomas</h4>
                        <p>Full Stack Developer building digital experiences that matter.</p>
                        <div className="social-links" style={{ marginTop: '1rem' }}>
                            <a href="https://github.com/anx000" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://linkedin.com/in/anexe-thomas" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="mailto:anexemt@gmail.com"><FaEnvelope /></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <div className="footer-links">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="footer-links">
                            <a href="mailto:anexemt@gmail.com">anexemt@gmail.com</a>
                            <a href="tel:+917025212685">+91 7025212685</a>
                            <span>Elenthikara, Ernakulam, Kerala</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Anexe Thomas. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2>Projects</h2>
                    <p>Some of my recent work</p>
                </motion.div>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <motion.div
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="project-content">
                            <div className="project-header">
                                <h3>Ecommerce Website</h3>
                                <div className="project-links">
                                    <a href="#" title="View Code"><FaGithub /></a>
                                    <a href="#" title="Live Demo"><FaExternalLinkAlt /></a>
                                </div>
                            </div>
                            <p className="project-description">
                                A full e-commerce system with authentication, product catalog, and cart.
                                Integrated Razorpay payment (test mode) and created order management flow.
                            </p>
                            <div className="project-tech">
                                <span className="tech-badge">Django</span>
                                <span className="tech-badge">Python</span>
                                <span className="tech-badge">Bootstrap</span>
                                <span className="tech-badge">SQLite</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="project-content">
                            <div className="project-header">
                                <h3>Job Portal</h3>
                                <div className="project-links">
                                    <a href="#" title="View Code"><FaGithub /></a>
                                    <a href="#" title="Live Demo"><FaExternalLinkAlt /></a>
                                </div>
                            </div>
                            <p className="project-description">
                                Multi-role portal for Job Seekers, Employers, and Admin.
                                Features role-based authentication, job posting, application management, and resume uploads.
                            </p>
                            <div className="project-tech">
                                <span className="tech-badge">Django</span>
                                <span className="tech-badge">Tailwind CSS</span>
                                <span className="tech-badge">Django ORM</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

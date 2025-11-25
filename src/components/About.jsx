import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2>About Me</h2>
                    <p>Get to know me better</p>
                </motion.div>
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I am a dedicated Full Stack Developer with a strong foundation in Python and Django.
                            My journey in tech started with a curiosity for how things work, which led me to pursue a Bachelor of
                            Computer Applications.
                        </p>
                        <p>
                            I specialize in building scalable backend systems with Django and creating intuitive frontend interfaces
                            using React and Tailwind CSS.
                            I am always eager to learn new technologies and improve my skills.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <span className="stat-number">1+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Commitment</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

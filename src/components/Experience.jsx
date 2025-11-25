import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2>Experience</h2>
                    <p>My professional journey</p>
                </motion.div>
                <div className="timeline">
                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-content">
                            <span className="timeline-date">Nov 2025 – Present</span>
                            <h3>Developer Intern</h3>
                            <h4>Expectations Walker Gen AI | Irinjalakuda, Kerala</h4>
                            <ul>
                                <li>Working on developing and improving company websites.</li>
                                <li>Creating clean and responsive UI based on design requirements.</li>
                                <li>Adding new features and updating existing web pages.</li>
                                <li>Fixing layout issues and improving overall user experience.</li>
                                <li>Supporting testing, documentation, and quality checks.</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-content">
                            <span className="timeline-date">May 2025 – Nov 2025</span>
                            <h3>Python Django Full Stack Developer Intern</h3>
                            <h4>Luminar Technolab | Kakkanad, Kerala</h4>
                            <ul>
                                <li>Built web apps with Django & Django REST Framework.</li>
                                <li>Created REST APIs and connected backend with React front-end.</li>
                                <li>Worked with HTML, CSS, JavaScript, Git & GitHub.</li>
                                <li>Learned modular coding and full-stack development workflow.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2>Education</h2>
                    <p>My academic background</p>
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
                            <span className="timeline-date">2022 – 2025</span>
                            <h3>Bachelor of Computer Applications (BCA)</h3>
                            <h4>Presentation College Of Applied Sciences | Puthenvelikara, Kerala</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Graduated with a solid foundation in computer science principles, programming, and software development.
                            </p>
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
                            <span className="timeline-date">2020 – 2022</span>
                            <h3>Higher Secondary Education</h3>
                            <h4>Goverment Higher Secondary School North Paravur | North Paravur, Kerala</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Completed higher secondary education with a focus on Computer Science.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;

import React from 'react';
import { FaServer, FaCode, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2>My Skills</h2>
                    <p>The tools and technologies I use</p>
                </motion.div>
                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="skill-category" variants={itemVariants} whileHover={{ y: -5 }}>
                        <h3><FaServer /> Backend</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">Django</span>
                            <span className="skill-tag">Django ORM</span>
                            <span className="skill-tag">DRF</span>
                            <span className="skill-tag">SQLite</span>
                        </div>
                    </motion.div>
                    <motion.div className="skill-category" variants={itemVariants} whileHover={{ y: -5 }}>
                        <h3><FaCode /> Frontend</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">HTML</span>
                            <span className="skill-tag">CSS</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">Tailwind CSS</span>
                            <span className="skill-tag">Bootstrap</span>
                        </div>
                    </motion.div>
                    <motion.div className="skill-category" variants={itemVariants} whileHover={{ y: -5 }}>
                        <h3><FaTools /> Tools</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">GitHub</span>
                            <span className="skill-tag">VS Code</span>
                            <span className="skill-tag">Postman</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

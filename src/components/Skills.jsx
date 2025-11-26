import React from 'react';
import { FaServer, FaCode, FaTools, FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiDjango, SiMysql, SiSqlite, SiTailwindcss, SiPostman } from 'react-icons/si';
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
                            <span className="skill-tag"><FaPython /> Python</span>
                            <span className="skill-tag"><SiDjango /> Django</span>
                            <span className="skill-tag"><SiDjango /> Django ORM</span>
                            <span className="skill-tag"><SiDjango /> DRF</span>
                            <span className="skill-tag"><SiMysql /> MySQL</span>
                            <span className="skill-tag"><SiSqlite /> SQLite</span>
                        </div>
                    </motion.div>
                    <motion.div className="skill-category" variants={itemVariants} whileHover={{ y: -5 }}>
                        <h3><FaCode /> Frontend</h3>
                        <div className="skill-tags">
                            <span className="skill-tag"><FaHtml5 /> HTML</span>
                            <span className="skill-tag"><FaCss3Alt /> CSS</span>
                            <span className="skill-tag"><FaJs /> JavaScript</span>
                            <span className="skill-tag"><FaReact /> React</span>
                            <span className="skill-tag"><SiTailwindcss /> Tailwind CSS</span>
                            <span className="skill-tag"><FaBootstrap /> Bootstrap</span>
                        </div>
                    </motion.div>
                    <motion.div className="skill-category" variants={itemVariants} whileHover={{ y: -5 }}>
                        <h3><FaTools /> Tools</h3>
                        <div className="skill-tags">
                            <span className="skill-tag"><FaGitAlt /> Git</span>
                            <span className="skill-tag"><FaGithub /> GitHub</span>
                            <span className="skill-tag"><FaCode /> VS Code</span>
                            <span className="skill-tag"><SiPostman /> Postman</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

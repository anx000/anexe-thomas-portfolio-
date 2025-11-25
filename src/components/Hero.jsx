import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const textArray = ["Python Django Developer", "Full Stack Developer", "Tech Enthusiast"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % textArray.length;
            const fullText = textArray[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Hi, I'm Anexe <br /> <span className="highlight">Thomas</span></h1>
                        <p className="subtitle">I am a <span className="typing-wrapper"><span className="typed-text">{text}</span><span className="cursor">|</span></span></p>
                        <p className="hero-description">
                            Passionate Python Django Full Stack Developer based in Kerala. I build modern, responsive, and robust web applications.
                        </p>
                        <div className="cta-buttons">
                            <motion.a
                                href="#projects"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects <FaArrowRight />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="btn btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Resume <FaDownload />
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="hero-blob"></div>
                        <div className="hero-img-container">
                            <img src="https://ui-avatars.com/api/?name=Anexe+Thomas&background=2563eb&color=fff&size=512" alt="Anexe Thomas" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

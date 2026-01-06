import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ColorBends from './ColorBends';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [theme, setTheme] = useState('light');

    const toRotate = ["Full Stack Developer", "Python Enthusiast", "React Developer"];

    // Theme detection
    useEffect(() => {
        const updateTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            setTheme(currentTheme);
        };

        updateTheme(); // Initial check

        // Observer to watch for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    updateTheme();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];

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

    // Adaptive colors based on theme
    const heroColors = theme === 'dark'
        ? ["#ff5c7a", "#8a5cff", "#00ffd1"] // Neon for Dark Mode
        : ["#ff2e55", "#6a00ff", "#00bfa5"]; // Darker/Stronger for Light Mode

    return (
        <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* ColorBends Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <ColorBends
                    colors={heroColors}
                    rotation={30}
                    speed={0.3}
                    scale={1.2}
                    frequency={1.4}
                    warpStrength={1.2}
                    mouseInfluence={0.8}
                    parallax={0.6}
                    noise={0.08}
                    transparent
                />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="subtitle">Welcome to my portfolio</span>
                        <h1>Hi! I'm Anexe Thomas <br /><span className="highlight">{text}</span><span className="cursor">|</span></h1>
                        <p className="hero-description">
                            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
                        </p>
                        <div className="cta-buttons">
                            <motion.a
                                href="#projects"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Work <FaArrowRight />
                            </motion.a>
                            <motion.a
                                href="https://drive.google.com/file/d/1md40eejbTz0joI6_6wRaNBqvbpWtkScC/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download CV <FaDownload />
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="hero-blob"></div>
                        <div className="hero-img-container">
                            <img src="https://via.placeholder.com/350" alt="Anexe Thomas" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <FaCode style={{ marginRight: '0.5rem', color: 'var(--accent)' }} />
                        Anexe Thomas
                    </div>
                    <div className="nav-right">
                        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                        </ul>
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                        </button>
                        <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

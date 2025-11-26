import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Easter Egg
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          activateEasterEgg();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activateEasterEgg = () => {
    alert('🎉 Konami Code Activated! Enjoy the party mode! 🎉');
    document.body.classList.toggle('konami-active');

    const interval = setInterval(() => {
      const confetti = document.createElement('div');
      confetti.innerText = '🐱';
      confetti.style.position = 'fixed';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-50px';
      confetti.style.fontSize = '24px';
      confetti.style.zIndex = '9999';
      confetti.style.transition = 'top 3s linear, transform 3s linear';
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.style.top = '110vh';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      }, 100);

      setTimeout(() => {
        confetti.remove();
      }, 3100);
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      document.body.classList.remove('konami-active');
      alert('Party mode deactivated. Back to work! 💼');
    }, 10000);
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

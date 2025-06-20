const typedText = document.querySelector('.typed-text');
const words = ["websites", "frontends", "backends"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typedText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 1000);
  }
}

setTimeout(typeEffect, 1500);

// Floating particles
setInterval(() => {
  const particle = document.createElement('div');
  particle.className = 'particle';
  const size = Math.random() * 4 + 2;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
  particle.style.animationDelay = Math.random() * 2 + 's';
  document.querySelector('.particles').appendChild(particle);
  setTimeout(() => particle.remove(), 6000);
}, 300);

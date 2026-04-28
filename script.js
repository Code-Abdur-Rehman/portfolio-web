const typingText = document.getElementById('typing-text');
const roleText = document.getElementById('animated-role');
const phrases = [
  'const hero = "I build fast, responsive web apps.";',
  'const toolkit = ["React", "Next.js", "Node.js"];',
  'Render(<>Modern UI + performance</>);',
];
const roles = ['Frontend Developer', 'Web Designer'];
let current = 0;
let letter = 0;
let forward = true;
let roleIndex = 0;

function type() {
  const phrase = phrases[current];
  typingText.textContent = phrase.slice(0, letter);

  if (forward) {
    if (letter < phrase.length) {
      letter += 1;
      setTimeout(type, 55);
    } else {
      forward = false;
      setTimeout(type, 1200);
    }
  } else {
    if (letter > 0) {
      letter -= 1;
      setTimeout(type, 30);
    } else {
      forward = true;
      current = (current + 1) % phrases.length;
      setTimeout(type, 300);
    }
  }
}

function cycleRole() {
  if (!roleText) return;
  roleText.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
  setTimeout(cycleRole, 2400);
}

type();
cycleRole();

const sections = document.querySelectorAll('.section-animate');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.18 }
);

sections.forEach((section) => observer.observe(section));

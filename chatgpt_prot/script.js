// Scroll Animation
AOS.init();

// Typing Effect
new Typed(".typing", {
  strings: ["Student at NIST University", "Front-End Developer",],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

function applyTheme(theme) {
  body.classList.toggle('light-mode', theme === 'light');
  icon.className = theme === 'light' ? 'bi bi-sun' : 'bi bi-moon';
}

themeToggle.addEventListener('click', () => {
  const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
});

applyTheme(localStorage.getItem('theme') || 'dark');

// Active Link Highlight + Auto-Close Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const navToggle = document.getElementById("click");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Auto-close menu on nav click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("click").checked = false;
  });
});

// Form Alert
document.querySelector("form").addEventListener("submit", () => {
  alert("Message sent! I'll get back to you soon.");
});

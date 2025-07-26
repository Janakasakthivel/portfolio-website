// Reveal on scroll using Intersection Observer
const reveals = document.querySelectorAll('.reveal');
const observer = new window.IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
reveals.forEach(reveal => observer.observe(reveal));

// Theme toggle (dark/light)
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});

// Prevent form submission
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! We will contact you soon.');
  e.target.reset();
});

// Smooth scroll for nav (optional, for older browsers)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
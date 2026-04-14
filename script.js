
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));


window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 50
    ? 'rgba(79, 143, 154, 0.99)'
    : 'rgb(0, 0, 0)';
})  
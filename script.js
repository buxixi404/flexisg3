const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('.faq-card').forEach((card, index) => {
  if (index === 0) card.classList.add('active');
  card.querySelector('.faq-q')?.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

const form = document.querySelector('#leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'thank-you.html';
  });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
revealItems.forEach(item => observer.observe(item));


const siteHeader = document.querySelector('.site-header');
const handleHeaderScroll = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('scrolled', window.scrollY > 8);
};
handleHeaderScroll();
window.addEventListener('scroll', handleHeaderScroll);

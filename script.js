// Select elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the display of the nav links on mobile
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

'use strict';

/**
 * ============================
 * Navbar Toggle Functionality
 * ============================
 */
const navOpenBtn = document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = () => {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
};

[navOpenBtn, navCloseBtn, overlay].forEach(elem => {
  elem.addEventListener('click', toggleNavbar);
});

/**
 * ============================
 * Sticky Header on Scroll
 * ============================
 */
const header = document.querySelector('[data-header]');

const handleHeaderSticky = () => {
  header.classList.toggle('active', window.scrollY >= 10);
};

window.addEventListener('scroll', handleHeaderSticky);

/**
 * ============================
 * Go Top Button Visibility
 * ============================
 */
const goTopBtn = document.querySelector('[data-go-top]');

const handleGoTopVisibility = () => {
  goTopBtn.classList.toggle('active', window.scrollY >= 500);
};

window.addEventListener('scroll', handleGoTopVisibility);

/**
 * ============================
 * Smooth Scroll to Top
 * ============================
 */
goTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

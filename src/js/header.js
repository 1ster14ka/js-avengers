document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header-burger');
  const menu = document.querySelector('.header-menu');
  const closeBtn = document.querySelector('.header-close');
  const navLinks = document.querySelectorAll('.header-nav a');

  burgerBtn.addEventListener('click', () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 360) {
      menu.classList.remove('active');
    }
  });
});

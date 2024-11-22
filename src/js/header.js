document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header-burger');
  const menu = document.querySelector('.header-menu');
  const closeBtn = document.querySelector('.header-close');
  const navLinks = document.querySelectorAll('.header-nav a');
  const switchInput = document.getElementById('switch');

  burgerBtn.addEventListener('click', () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      menu.classList.remove('active');
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 360) {
      menu.classList.remove('active');
    }
  });
});

switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    console.log('Switch ON');
  } else {
    console.log('Switch OFF');
  }
});

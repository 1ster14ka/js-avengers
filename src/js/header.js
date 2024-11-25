document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.js-open-menu');
  const closeBtn = document.querySelector('.js-close-menu');
  const menu = document.querySelector('.js-menu-container');
  const navLinks = document.querySelectorAll('.mob-menu-list a');
  const switchInput = document.querySelector('.switch-input');

  if (!burgerBtn || !closeBtn || !menu || !switchInput) {
    console.error('Один із необхідних елементів не знайдено');
    return;
  }

  const openMenu = () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
  };

  burgerBtn.addEventListener('click', openMenu);

  closeBtn.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      closeMenu();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  switchInput.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme', switchInput.checked);
  });

  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      closeMenu();
    }
  });
});

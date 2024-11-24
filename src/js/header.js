document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.js-open-menu');
  const closeBtn = document.querySelector('.js-close-menu');
  const menu = document.querySelector('.js-menu-container');
  const navLinks = document.querySelectorAll('.mob-menu-list a');

  if (!burgerBtn || !closeBtn || !menu) {
    console.error('Один із необхідних елементів не знайдено');
    return;
  }

  // Відкриття меню
  burgerBtn.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Блокуємо прокрутку
  });

  // Закриття меню
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = ''; // Відновлюємо прокрутку
  });

  // Закриття меню при кліку на посилання
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      menu.classList.remove('active');
      document.body.style.overflow = ''; // Відновлюємо прокрутку
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

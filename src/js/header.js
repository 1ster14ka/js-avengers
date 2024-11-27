const burgerBtn = document.querySelector('.burger-btn'); // Кнопка бургер
const modalOverlay = document.querySelector('.modal-overlay'); // Модалка
const closeModalBtn = modalOverlay.querySelector('.icon-close'); // Крестик в модалке
const switchInput = document.querySelector('.switch-input');
const wrappArrow = document.querySelector('.wrapp-arrow');
const reviewsSwiper = document.querySelector('.reviews-swiper ');

// Открыть модалку
burgerBtn.addEventListener('click', () => {
  modalOverlay.classList.add('active'); // Добавляем класс для отображения модалки
  // burgerBtn.style.display = 'none';
  wrappArrow.style.display = 'none';
  reviewsSwiper.style.display = 'none';
});

// Закрыть модалку
closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active'); // Убираем класс для скрытия модалки
  // burgerBtn.style.display = 'flex';
  wrappArrow.style.display = 'flex';
  reviewsSwiper.style.display = 'flex';
});

// Закрытие модалки по клику вне её области
modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('dark-theme') === 'true';
  switchInput.checked = isDarkMode;
  document.body.classList.toggle('dark-theme', isDarkMode);
});

switchInput.addEventListener('change', () => {
  const isChecked = switchInput.checked;
  document.body.classList.toggle('dark-theme', isChecked);
  localStorage.setItem('dark-theme', isChecked);
});

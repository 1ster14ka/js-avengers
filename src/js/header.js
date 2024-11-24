const burgerBtn = document.querySelector('.burger-btn'); // Кнопка бургер
const modalOverlay = document.querySelector('.modal-overlay'); // Модалка
const closeModalBtn = modalOverlay.querySelector('.icon-close'); // Крестик в модалке

// Открыть модалку
burgerBtn.addEventListener('click', () => {
  modalOverlay.classList.add('active'); // Добавляем класс для отображения модалки
  // burgerBtn.style.display = 'none';
});

// Закрыть модалку
closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active'); // Убираем класс для скрытия модалки
  // burgerBtn.style.display = 'flex';
});

// Закрытие модалки по клику вне её области
modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

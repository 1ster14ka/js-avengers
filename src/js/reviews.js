const reviewsList = document.querySelector('.coments-list');
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');
const resultsContainer = document.querySelector('.results-container');

let reviews = [];
let currentIndex = 0;

// Функція для створення розмітки
const createMarkup = reviews => {
  return reviews
    .map(
      review => `
    <li class="coments-text">
      <p class="author-text">${review.review}</p>
      <div class="coments-author">
        <img src="${review.avatar_url}" alt="${review.author}" class="author-icon">
        <p class="author-name">${review.author}</p>
      </div>
    </li>
  `
    )
    .join('');
};

// Функція для завантаження відгуків
const fetchReviews = async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    reviews = response.data;

    if (!Array.isArray(reviews) || reviews.length === 0) {
      throw new Error('No reviews found');
    }

    // Завантажуємо перші два або один коментар в залежності від екрану
    const isMobile = window.innerWidth <= 768; // Для мобільних пристроїв
    const itemsToDisplay = isMobile ? 1 : 2; // Відображаємо один коментар для мобільних та планшетів, два — для ноутбуків
    reviewsList.innerHTML = createMarkup(
      reviews.slice(currentIndex, currentIndex + itemsToDisplay)
    );
    updateButtons();
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    resultsContainer.innerHTML = '<p class="error-message">Not found</p>';
  }
};

// Функція для оновлення кнопок
const updateButtons = () => {
  if (currentIndex === 0) {
    prevButton.classList.replace('btn-prev', 'btn-prev-hidden');
  } else {
    prevButton.classList.replace('btn-prev-hidden', 'btn-prev');
  }

  // Якщо індекс досягнув останнього коментаря
  const isMobile = window.innerWidth <= 768;
  const itemsToDisplay = isMobile ? 1 : 2;
  if (currentIndex >= reviews.length - itemsToDisplay) {
    nextButton.classList.replace('btn-next', 'btn-next-hidden');
  } else {
    nextButton.classList.replace('btn-next-hidden', 'btn-next');
  }
};

// Функція для перемикання слайдів
const slide = direction => {
  const isMobile = window.innerWidth <= 768; // Для мобільних пристроїв
  const itemsToDisplay = isMobile ? 1 : 2; // Відображаємо один коментар для мобільних та планшетів, два — для ноутбуків

  if (direction === 'next' && currentIndex < reviews.length - itemsToDisplay) {
    currentIndex++;
  } else if (direction === 'prev' && currentIndex > 0) {
    currentIndex--;
  }

  reviewsList.innerHTML = createMarkup(
    reviews.slice(currentIndex, currentIndex + itemsToDisplay)
  );
  updateButtons();
};

// Обробник події для клавіші `Tab` (без Shift)
document.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    // Запобігаємо стандартній поведінці переходу по елементах форми
    event.preventDefault();

    if (event.shiftKey) {
      // Shift + Tab для перемикання вліво
      slide('prev');
    } else {
      // Tab для перемикання вправо
      slide('next');
    }
  } else if (event.key === 'ArrowLeft') {
    slide('prev');
  } else if (event.key === 'ArrowRight') {
    slide('next');
  }
});

// Обробники подій для кнопок
prevButton.addEventListener('click', () => slide('prev'));
nextButton.addEventListener('click', () => slide('next'));

// Додавання обробника події для зміни ширини екрану
window.addEventListener('resize', fetchReviews);

// Ініціалізація
fetchReviews();

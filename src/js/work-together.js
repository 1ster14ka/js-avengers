import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModalButton = document.getElementById('closeModal');
const errorNotification = document.getElementById('errorNotification');
const backdrop = document.getElementById('backdrop');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  // Логування даних, що відправляються
  console.log('Sending data:', {
    email: formData.get('email'),
    comment: formData.get('comment'),
  });

  const data = {
    email: formData.get('email'),
    comment: String(formData.get('comment')),
  };

  console.log(data);

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      console.log('Success:', data);

      sendMessage(data);

      backdrop.classList.add('is-open'); // Показуємо фон
      form.reset(); // Очищуємо форму
    })
    .catch(error => {
      //   console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
      });
    });
});

// Функція для виведення даних у модальне вікно
function sendMessage(data) {
  const modalTitleJs = document.getElementById('jsTitle');
  const modalTextJs = document.getElementById('jsText');

  if (modalTitleJs) {
    // Створюємо повідомлення на основі отриманих даних
    const message = `${data.title}`;
    // Виводимо повідомлення в модальному вікні
    modalTitleJs.textContent = message;
  } else {
    console.error('Element with id "jsTitle" not found.');
  }

  if (modalTextJs) {
    // Створюємо повідомлення на основі отриманих даних
    const messageText = `${data.message}`;
    // Виводимо повідомлення в модальному вікні
    modalTextJs.textContent = messageText;
  } else {
    console.error('Element with id "jsText" not found.');
  }
}

function closeModal() {
  backdrop.classList.remove('is-open');
}

closeModalButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    // Перевіряємо, що клік був по backdrop, а не по модальному вікну
    closeModal();
  }
});

// Закриття по натисканню клавіші Escape
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

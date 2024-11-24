const list = document.querySelector('.nav-list');
const modal = document.querySelector('.modal-overlay');

list.addEventListener('click', event => {
  if (event.target.classList.contains('modal-link')) {
    modal.classList.remove('active');
  } else {
    return;
  }
});

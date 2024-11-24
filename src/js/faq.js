import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqContainer = document.querySelector('.questions-container');

const accordion = new Accordion(faqContainer, {
  // options
  showMultiple: false,
  duration: 400,
  onOpen: function (el) {
    el.style.overflow = 'visible';

    //setting styles of the prev card back

    const allQuestions = document.querySelectorAll('.ac');
    allQuestions.forEach(question => {
      question.style.backgroundColor = 'white';
      question.style.borderRadius = 'none';
      question.style.borderBottom = '1px solid #e4e5e6';
    });

    //styles change when opening
    const question = el.closest('.ac');
    const prevQuestion = question.previousElementSibling;
    console.log(prevQuestion);

    if (prevQuestion) {
      prevQuestion.style.borderBottom = 'none';
    }

    question.style.backgroundColor = '#BCDFD1';
    question.style.borderRadius = '16px';
    question.style.borderBottom = 'none';

    //icon rotation
    const icon = el.querySelector('.faq-icon use');
    icon.setAttribute('href', './img/svg-icons/symbol-defs.svg#icon-vector-up');
  },
  onClose: function (el) {
    //styles back to normal
    const question = el.closest('.ac');
    const prevQuestion = question.previousElementSibling;

    if (prevQuestion) {
      prevQuestion.style.borderBottom = '1px solid #e4e5e6';
    }

    question.style.borderRadius = 'none';
    question.style.backgroundColor = 'white';
    question.style.borderBottom = '1px solid #e4e5e6';

    //icon rotation
    const icon = el.querySelector('.faq-icon use');
    icon.setAttribute(
      'href',
      './img/svg-icons/symbol-defs.svg#icon-vector-down'
    );
  },
});

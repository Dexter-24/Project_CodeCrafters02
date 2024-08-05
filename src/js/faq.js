import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// const faqAccordeonList = document.querySelector('.faq-list');

// const faqAccordion = new Accordion(faqAccordeonList, {
//   duration: 600,
//   showMultiple: true,
//   openOnInit: [0],
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const faqAccordionWrap = document.querySelectorAll('.faq-acordeon-wrap');
//   faqAccordionWrap.forEach(item => {
//     item.addEventListener('click', function () {
//       const faqArrow = item.querySelector('.faq-icon');
//       const faqDescription = item.nextElementSibling;
//       faqArrow.classList.toggle('faq-is-active');
//       faqDescription.classList.toggle('hidden');
//     });
//   });
// });

const faqAccordeonList = document.querySelector('.faq-list');
const faqAccordeonColumn = document.querySelector('.left-column');

const faqAccordion = new Accordion(faqAccordeonList, {
  duration: 600,
  showMultiple: true,
});

const faqAccordionLeft = new Accordion(faqAccordeonColumn, {
  duration: 600,
  showMultiple: true,
});

const faqAccordionWrap = document.querySelectorAll('.faq-acordeon-wrap');

faqAccordionWrap.forEach(item => {
  item.addEventListener('click', function () {
    const faqArrow = item.querySelector('.faq-icon');
    const faqDescription = item.nextElementSibling;
    faqArrow.classList.toggle('faq-is-active');
    faqDescription.classList.toggle('hidden');
  });
});

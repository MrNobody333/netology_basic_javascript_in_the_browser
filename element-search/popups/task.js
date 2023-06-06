// Задача 1
const main = document.querySelector('#modal_main');
const success = document.querySelector('#modal_success');
const show = document.querySelector('.show-success');
const cross = [...document.querySelectorAll('.modal__close')];

main.classList.add('modal_active');

cross.forEach(el => {
  el.addEventListener('click', () => {
    main.classList.remove('modal_active');
    success.classList.remove('modal_active');
  });
});

show.addEventListener('click', () => {
  success.classList.add('modal_active');
});
const modal = document.querySelector('.modal');

window.addEventListener('load', () => {
  const cookie = document.cookie.split('; ');
  
  if (cookie.find(el => el === 'popup=modal_close')) return;
  modal.classList.add('modal_active');
});

window.addEventListener('click', e => {
  const modalContent = document.querySelector('.modal__content');

  if (e.target !== modalContent) {
    modal.classList.remove('modal_active');
    document.cookie = 'popup=modal_close';
  }
});
const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const greeting = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const btnLogout = document.getElementById('logout__btn');
const popup = document.getElementById('popup__wrapper');
const btnClose = document.getElementById('popup__close');

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.user) {
    signin.classList.remove('signin_active');
    greeting.classList.add('welcome_active');
    btnLogout.classList.add('logout__btn_active');
    userId.textContent = localStorage.user;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch('https://students.netoservices.ru/nestjs-backend/auth', {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.status);
    })
    .then(auth => {
      if (auth.success) {
        signin.classList.remove('signin_active');
        greeting.classList.add('welcome_active');
        btnLogout.classList.add('logout__btn_active');
        userId.textContent = auth.user_id;
        localStorage.user = auth.user_id;
      } else {
        const inputs = document.querySelectorAll('.control');
        inputs.forEach(input => input.value = '');
        popup.classList.add('popup__wrapper_active');
      }
    })
    .catch(err => console.log(err));
});

btnLogout.addEventListener('click', () => {
  signin.classList.add('signin_active');
  greeting.classList.remove('welcome_active');
  btnLogout.classList.remove('logout__btn_active');
  localStorage.removeItem('user');
});

btnClose.addEventListener('click', () => {
  popup.classList.remove('popup__wrapper_active');
});
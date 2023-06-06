// Задача 3
const tab = [...document.querySelectorAll('.tab')];
const tabContent = [...document.querySelectorAll('.tab__content')];

tab.forEach((el, i) => {
  el.addEventListener('click', () => {
    tab.forEach(el => el.classList.remove('tab_active'));
    tabContent.forEach(el => el.classList.remove('tab__content_active'));
  
    el.classList.add('tab_active');
    tabContent[i].classList.add('tab__content_active');
  });
});
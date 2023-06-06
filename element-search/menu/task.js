// Задача 2
const menuLink = [...document.querySelectorAll('.menu__link')];
const subMenu = [...document.querySelectorAll('.menu_sub')];

menuLink.forEach(el => {
  el.addEventListener('click', () => {
    if (el.nextElementSibling) {
      const menu = el.nextElementSibling.classList;

      menu.toggle('menu_active');
      
      if (menu.contains('menu_active')) {
        subMenu.forEach(el => el.classList.remove('menu_active'));
        menu.add('menu_active')
      }
      event.preventDefault();
    }
  });
});

window.addEventListener('click', event => {
  if (!event.target.closest('.menu__link')) {
    subMenu.forEach(el => el.classList.remove('menu_active'));
  }
});
// Задача 3
const sliderArrows = [...document.querySelectorAll('.slider__arrow')];
const sliderItem = [...document.querySelectorAll('.slider__item')];
let index = 0;

sliderArrows.forEach(el => {
  el.addEventListener('click', () => {
    sliderItem[index].classList.remove('slider__item_active');

    if (el.classList.contains('slider__arrow_next')) {
      index = index === sliderItem.length -1 ? -1 : index;
      sliderItem[++index].classList.add('slider__item_active');
    } else {
      index = index === 0 ? sliderItem.length : index;
      sliderItem[--index].classList.add('slider__item_active');   
    }
  });
});
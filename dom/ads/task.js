const rotator = [...document.querySelectorAll('.rotator__case')];
let index = 0;

setInterval(() => {
  rotator[index].classList.remove('rotator__case_active');
  index === rotator.length -1 ? index = 0 : index++;
  rotator[index].classList.add('rotator__case_active');
  rotator[index].style.color = rotator[index].dataset.color;
}, 1000);
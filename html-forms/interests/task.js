const interest = [...document.querySelectorAll('.interests_active')];

interest.forEach(el => {
  el.previousElementSibling.addEventListener('click', () => {
    el.querySelectorAll('input').forEach(el => {
      el.checked = !el.checked;
    });
  });
});
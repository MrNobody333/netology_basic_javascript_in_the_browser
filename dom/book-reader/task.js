const fontSize = document.querySelectorAll('.font-size');
const reader = document.querySelector('.book');

fontSize.forEach(el => {
  el.addEventListener('click', e => {
    fontSize.forEach(e => {
      e.classList.remove('font-size_active');
    });

    el.classList.add('font-size_active');
    reader.classList.remove('book_fs-big', 'book_fs-small');

    if (el.classList.contains('font-size_small')) {
      reader.classList.add('book_fs-small');
    } else {
      reader.classList.add('book_fs-big');
    }
    e.preventDefault();
  });
});
const textArea = document.getElementById('editor');
const resetBtn = document.getElementById('reset');

window.addEventListener('load', () => {
  textArea.value = localStorage?.text ? localStorage.text : '';
});

textArea.addEventListener('input', () => {
  localStorage.text = textArea.value;
});

resetBtn.addEventListener('click', () => {
  textArea.value = '';
  localStorage.removeItem('text');
});
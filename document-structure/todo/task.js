const button = document.forms[0][1];
const tasksList = document.querySelector('.tasks__list');

button.addEventListener('click', e => {
  const input = document.forms[0][0];

  if (input.value) {
    tasksList.innerHTML += 
      `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`;

    input.value = '';
  }
  
  remove();
  localStorage.setItem('tasks', tasksList.innerHTML);
  e.preventDefault();
});

window.addEventListener('load', () => {
  if (localStorage.hasOwnProperty('tasks')) {
    tasksList.innerHTML = localStorage.getItem('tasks');
  }
  remove();
});

function remove() {
  const crosses = [...document.querySelectorAll('.task__remove')];

  crosses.forEach(cross => cross.addEventListener('click', e => {
    e.target.closest('.task').remove();
    localStorage.setItem('tasks', tasksList.innerHTML); 
    e.preventDefault();
  }));
}
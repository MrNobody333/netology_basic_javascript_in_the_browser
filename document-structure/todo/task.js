
const button = document.forms[0][1];

button.addEventListener('click', e => {
  const input = document.forms[0][0];
  const tasksList = document.querySelector('.tasks__list');

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

  const crosses = [...document.querySelectorAll('.task__remove')];

  crosses.forEach(cross => cross.addEventListener('click', e => {
    e.target.closest('.task').remove();
    e.preventDefault();
  }));

  e.preventDefault();
});
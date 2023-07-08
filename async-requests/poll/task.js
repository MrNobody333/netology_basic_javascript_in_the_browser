const poll = document.querySelector('.poll__title');
const answers = document.querySelector('.poll__answers');

function getRequest() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.response);
    poll.textContent = `${response.data.title}`;
    
    response.data.answers.forEach(answer => {
      const button = document.createElement('button');
      button.className = 'poll__answer';
      button.textContent = `${answer}`;
      answers.append(button);
    });
  
    const answer = [...document.querySelectorAll('.poll__answer')];
    const dialogMenu = document.querySelector('.dialog-menu');
    const menuClose = document.querySelector('.dialog-menu__close');
  
    answer.forEach((el, index) => {
      el.addEventListener('click', () => {
        dialogMenu.classList.add('dialog-menu_active');
        postRequest(response.id, index);
      });
    });
  
    window.addEventListener('click', e => {
      if (e.target === menuClose || e.target === dialogMenu) {
        dialogMenu.classList.remove('dialog-menu_active');
      }
    });
  });

  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.send();
}
getRequest()

function postRequest(id, index) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.response).stat;

    answers.innerHTML = '';

    for (let res of response) {
      answers.innerHTML += `<p>${res.answer}: <span>${res.votes}%</span></p>`;
    }
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`vote=${id}&answer=${index}`);
}
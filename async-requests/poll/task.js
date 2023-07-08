const poll = document.querySelector('.poll__title');
const answers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  const response = JSON.parse(xhr.response).data;
  poll.textContent = `${response.title}`;

  response.answers.forEach(answer => {
    const button = document.createElement('button');
    button.className = 'poll__answer';
    button.textContent = `${answer}`;
    answers.append(button);
  });
  const answer = [...document.querySelectorAll('.poll__answer')];
  
  answer.forEach(el => {
    el.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
    });
  });
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
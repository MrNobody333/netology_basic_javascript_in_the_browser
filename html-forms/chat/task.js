const widget = document.querySelector('.chat-widget');
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const currentTime = new Date().toLocaleTimeString().slice(0, 5);

widget.addEventListener('click', showWidget);
input.addEventListener('keyup', sendMessages);

function showWidget() {
  widget.classList.add('chat-widget_active');
}

function sendMessages(e) {
  if (e.key === 'Enter' && input.value) {
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">${input.value}</div>
      </div>
      <div class="message">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">${robotMessages()}</div>
      </div>
    `;
    input.value = '';
  }
}

function robotMessages() {
  const message = [
    'Где ваша совесть?', 
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше', 
    'Кто тут?', 
    'Мы ничего не будем вам продавать!',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Добрый день! Досвидания!'
  ];

  const random = Math.floor(Math.random() * message.length);
  return message[random];
}
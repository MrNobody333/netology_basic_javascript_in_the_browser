const items = document.getElementById('items');
const loader = document.querySelector('.loader.loader_active');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

window.addEventListener('load', getLocalStorageData);

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', getData);
xhr.open('GET', url);
xhr.send();

function getData() {
  if (xhr.readyState === xhr.DONE) {
    const valute = JSON.parse(xhr.responseText).response.Valute;

    loader.classList.remove('loader_active');
    items.innerHTML = '';

    for (let el in valute) {
      items.innerHTML +=
        `<div class="item">
          <div class="item__code">
            ${valute[el].CharCode}
          </div>
          <div class="item__value">
            ${valute[el].Value}
          </div>
          <div class="item__currency">
            руб.
          </div>
        </div>`
    }

    localStorage.setItem('exchange-rates', items.innerHTML);
    console.log('loaded/updated exchange rate data');
  }
}

function getLocalStorageData() {
  if (localStorage.hasOwnProperty('exchange-rates')) {
    loader.classList.remove('loader_active');
    items.innerHTML = localStorage.getItem('exchange-rates');
    console.log('loaded exchange rate data from local storage');
  }
}
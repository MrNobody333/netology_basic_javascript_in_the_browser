document.getElementById('form').addEventListener('submit', e => {
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', e => {
    progress.setAttribute('max', e.total);
    progress.value = e.loaded;
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(new FormData(document.getElementById('form')));

  e.preventDefault();
});
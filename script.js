const proceduresBtn = document.querySelector('.hero-action-button');
const signBtn = document.querySelector('.action-button');

proceduresBtn.addEventListener('click', () => {
  proceduresBtn.innerText = 'Загрузка...';
  setInterval(() => {
    button.innerText = 'Процедуры лечения';
  }, 2000);
});

signBtn.addEventListener('click', () => {
  signBtn.innerText = 'Спасибо!';
  setInterval(() => {
    signBtn.innerText = 'Запись на прием';
  }, 2000);
});

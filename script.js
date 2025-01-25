const proceduresBtn = document.querySelector('.hero-action-button');

proceduresBtn.addEventListener('click', () => {
  proceduresBtn.innerText = 'Загрузка...';
  setInterval(() => {
    proceduresBtn.innerText = 'Процедуры лечения';
  }, 2000);
});
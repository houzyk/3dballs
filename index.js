const space = document.querySelector('.space');

for (let index = 0; index < 9; index++) {
  const htmlInput = `<div class="ball"></div>`;
  space.insertAdjacentHTML('beforeend', htmlInput);
}

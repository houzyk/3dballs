const space = document.querySelector('.space');

for (let index = 0; index < 9; index++) {
  const ballHtmlInput = `<div class="ball"></div>`;
  space.insertAdjacentHTML('beforeend', ballHtmlInput);
}

const balls = document.querySelectorAll('.ball');

setInterval(() => {
  const randomBallPosition = Math.round(Math.random() * 8);
  const randomAngle = Math.round(Math.random() * 360);
  const randomLight1 = Math.round(50 + Math.random() * 25);
  const randomLight2 = Math.round(50 + Math.random() * 25);
  const randomLight3 = Math.round(50 + Math.random() * 25);
  const randomDirection = [];
  const randomBackgroundImage = `linear-gradient(${randomAngle}deg,hsl(329, 100%, ${randomLight1}%),
                                  hsl(45, 100%, ${randomLight2}%),
                                  hsl(206, 100%, ${randomLight3}%))`;
  balls[randomBallPosition].style.backgroundImage = randomBackgroundImage;
  balls[randomBallPosition].style.transform = "scale(-0.7)";
  setTimeout(() => {
    balls[randomBallPosition].style.transform = "scale(1)";
  }, 250);
}, 500);

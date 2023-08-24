const title = document.querySelector('div.hello:first-child h1');
function handleMouseEnter() {
  title.innerText = 'Mouse is here!';
}
function handleMouseLeave() {
  title.innerText = 'Mouse is gone!';
}
function handleWindowResize() {
  document.body.style.backgroundColor = 'beige';
}
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);
window.addEventListener('resize', handleWindowResize);

const h1Second = document.querySelector('div.hello h1:nth-child(2)');
function handleSecondTitleClick() {
  h1Second.style.color = 'red';
}
h1Second.addEventListener('click', handleSecondTitleClick);

const h1Third = document.querySelector('div.hello h1:nth-child(3)');
function handleThirdTitleClick() {
  h1Third.style.color = 'blue';
}
h1Third.addEventListener('click', handleThirdTitleClick);

const h1Fourth = document.querySelector('div.hello h1:nth-child(4)');
let transitioning = false;
function handleFourthTitleClick() {
  if (!transitioning) {
    transitioning = true;
    h1Fourth.style.transition = 'color 1s';
    h1Fourth.style.color = 'green';
    setTimeout(() => {
      transitioning = false;
    }, 500);
  }
}
h1Fourth.addEventListener('click', handleFourthTitleClick);

const h1Fifth = document.querySelector('div.hello h1:nth-child(5)');
function handleFifthTitleClick() {
  if (h1Fifth.style.color === 'skyblue') {
    h1Fifth.style.color = 'tomato';
  } else {
    h1Fifth.style.color = 'skyblue';
  }
}
h1Fifth.addEventListener('click', handleFifthTitleClick);

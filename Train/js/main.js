const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const trainEl = document.querySelector('.train-img');

const lightEl = document.querySelector('.light');
const BtnLight = document.querySelector('.btn-light');

document.querySelector('.light-span').style.color = 'red';

const left = () => {
  if (trainEl.style.animationPlayState === 'paused' && trainEl.classList.contains('left')) {
    trainEl.style.animationPlayState = 'running';
    console.log('1');
  }else if(trainEl.style.animationPlayState === 'running' && trainEl.classList.contains('left')) {
    trainEl.style.animationPlayState = 'paused';
    console.log('2');
  }else if(trainEl.classList.contains('right')) {
    trainEl.style.left = getComputedStyle(trainEl).left;
    trainEl.classList.remove('right');
    trainEl.classList.add('left');
    trainEl.style.animationPlayState = 'running';
    console.log('3');
  }else {
    console.log('4');
    trainEl.classList.add('left');
    trainEl.style.left = getComputedStyle(trainEl).left;
    trainEl.style.animationPlayState = 'running';
  };
};


const right = () => {
  if (trainEl.style.animationPlayState === 'paused' && trainEl.classList.contains('right')) {
    trainEl.style.animationPlayState = 'running';
    console.log('5');
  }else if(trainEl.style.animationPlayState === 'running' && trainEl.classList.contains('right')) {
    trainEl.style.animationPlayState = 'paused';
    console.log('6');
  }else if(trainEl.classList.contains('left')) {
    trainEl.style.left = getComputedStyle(trainEl).left;
    trainEl.classList.remove('left');
    trainEl.classList.add('right');
    trainEl.style.animationPlayState = 'running';
    console.log('7');
  }else {
    console.log('8');
    trainEl.classList.add('right');
    trainEl.style.left = getComputedStyle(trainEl).left;
    trainEl.style.animationPlayState = 'running';
  };
};

const light = () => {
  lightEl.classList.toggle('light-on');
  if (lightEl.classList.contains('light-on')) {
    document.querySelector('.light-span').innerHTML = "ON";
    document.querySelector('.light-span').style.color = 'green';
  } else {
    document.querySelector('.light-span').innerHTML = "OFF";
    document.querySelector('.light-span').style.color = 'red';
  }
};


btnLeft.addEventListener('click', left);

btnRight.addEventListener('click', right);

BtnLight.addEventListener('click', light);

document.addEventListener('keydown', (ev) => {
  switch (ev.code) {
    case 'ArrowLeft':
      left();
      break;
    case 'ArrowRight':
      right();
      break;
    case 'KeyF':
      light();
      break;
  };
});
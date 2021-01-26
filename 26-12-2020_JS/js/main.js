const taimerEl = document.querySelector('.taimer');
const inputTime = document.querySelector('.input-time');
const startButton = document.querySelector('.start-button');
const iconSpinEl = document.querySelector('.icon-spin3');

let timeVal;
let timerId;

startButton.disabled = true;

const runTimer = () => {
  let currTime = moment();

  let destTime = moment(`${timeVal}`, 'HH:mm');

  if (moment(destTime).isBefore(currTime)) {
    destTime.add(1, 'd');
  };

  let diffTime = moment(destTime.diff(currTime));
  taimerEl.innerHTML = moment(diffTime).utc().format('HH:mm:ss');
  iconSpinEl.classList.add('icon-spin');
  inputTime.readOnly = true;

  if (taimerEl.innerHTML === "00:00:00") {
    inputTime.readOnly = false;
    clearInterval(timerId);
    iconSpinEl.classList.remove('icon-spin');
  };
};

startButton.addEventListener('click', () => {
  if (taimerEl.innerHTML === "00:00:00") {
    timerId = setInterval(runTimer, 1000);
  } else {
    clearInterval(timerId);
    iconSpinEl.classList.remove('icon-spin');
    taimerEl.innerHTML = "00:00:00";
    inputTime.readOnly = false;
  };
});

inputTime.addEventListener('change', (event) => {
  timeVal = event.target.value;
  if (event.target.value !== '') {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
});
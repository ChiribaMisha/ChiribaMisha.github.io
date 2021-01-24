const PLACES = 33;

// generate arr

const arrPlaces = [];

const generatePlaces = () => {
  for (let i = 0; i < PLACES; i++) {
    arrPlaces.push({
      id: i,
      occupied: false,
      time: '--:--',
    });
  };
};
generatePlaces();


// function get free spaces

const occuPlaces = () => {
  return arrPlaces.reduce((sum, val) => {
    if (val.occupied) sum += 1;
    return sum;
  }, 0);

};

// timer + free + occu spaces
const currentTimerEl = document.querySelector('.current-time');
let id;
let currTime;

const runTime = () => {
  id = setInterval( () => {
    let time = moment();
    currTime = time.format('DD-MM-YYYY HH:mm:ss');
    currentTimerEl.innerHTML = `${currTime}`;
  }, 1000);
  return currTime;
};
runTime();


const freeSpacesEl = document.querySelector('.free-spaces');
const occupiedSpacesEl = document.querySelector('.occupied-spaces');
const recommendationEl = document.querySelector('.recommendation');

const procentFreeParkPlaceCount = () => {
  let result = Math.floor(PLACES-(PLACES / 100 * 20));
  let time = moment().format('HH');
  if (time > 9 && time < 18) {
    if(occuPlaces() === result) {
      recommendationEl.style.display = "block";
    };
  };
};

const refreshInfoBoard = () => {
  let temp = occuPlaces();
  procentFreeParkPlaceCount();
  occupiedSpacesEl.innerHTML = `occupied: ${temp}`;
  freeSpacesEl.innerHTML = `free: ${arrPlaces.length - temp}`;
};
refreshInfoBoard();


const mainEl = document.querySelector('.main');

const renderParkPlaces = () => {
  mainEl.innerHTML = arrPlaces.reduce((str, el) => {
    return `${str}
      <div id = "${ el.id }" class = "parking-place">
        ${el.id} <br>
        ${el.occupied ? 'occupied' : 'free'} <br>
        ${el.time}
      </div>
    `;
  }, '');
};

renderParkPlaces();

// LOGIKA

const carinEl = document.querySelector('.car-in');
const caroutEl = document.querySelector('.car-out');
const overlayEl = document.querySelector('.overlay');
const btnCloseEl = document.querySelectorAll('.modal-close');
const inputFromTimeEl = document.querySelector('.from-time');
const btnOkeEl = document.querySelector('.btn-ok');
const btnYesEl = document.querySelector('.btn-yes');
const btnNoEl = document.querySelector('.btn-no');
const occuTimeEl = document.querySelector('.occu-time');


const modalShowRemover = () => {
  carinEl.classList.remove('modal-show');
  caroutEl.classList.remove('modal-show');
  overlayEl.classList.remove('modal-show');
};

btnCloseEl.forEach(element => {
  element.addEventListener('click', modalShowRemover);
});


mainEl.addEventListener('click', (event) => {
  if (event.target.id !== '') {
    let i = Number(event.target.id);
    if (!arrPlaces[i].occupied) {
      carinEl.classList.add('modal-show');
      overlayEl.classList.add('modal-show');
      inputFromTimeEl.value = moment().format('HH:mm');

      const clickBtnOk = () => {
        arrPlaces[i].time = inputFromTimeEl.value;
        arrPlaces[i].occupied = true;
        modalShowRemover();
        renderParkPlaces();
        refreshInfoBoard();
        btnOkeEl.removeEventListener('click', clickBtnOk);
      }
      btnOkeEl.addEventListener('click', clickBtnOk);
    } else {
      caroutEl.classList.add('modal-show');
      overlayEl.classList.add('modal-show');
      
      let currTime = moment();
      let destTime = moment(arrPlaces[i].time, 'HH:mm');
      let diffTime = moment(destTime.diff(currTime));
      occuTimeEl.innerHTML = moment(diffTime).utc().format('HH:mm');
      
      const clickBtnYes = () => {
        arrPlaces[i].time = '--:--';
        arrPlaces[i].occupied = false;
        modalShowRemover();
        renderParkPlaces();
        refreshInfoBoard();
        btnYesEl.removeEventListener('click', clickBtnYes);
      };

      btnYesEl.addEventListener('click', clickBtnYes);

      const clickBtnNo = () => {
        modalShowRemover();
        btnNoEl.removeEventListener('click', clickBtnNo);
      };

      btnNoEl.addEventListener('click', clickBtnNo);
    };
  };
});
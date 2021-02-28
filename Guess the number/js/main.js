const VAL = 501;

const randomInt = (min, max) => {
  let random = min + Math.random() * (max + 1 -min);
  return Math.floor(random);
};

let min = -2147483647;
let max = 2147483647;
let curr = null;
let str = " ";
let round = 0;

do {
  curr = randomInt(min, max);
  if (curr === VAL) {
    round += 1;
    str = `${str} <div> Round #${round} ~ Найдено! <div> <div> Число = ${VAL} <div>\n`;
  } else if (curr < VAL) {
    round += 1;
    min = curr + 1;
    str = `${str} <div> Round #${round} ~ ${curr} меньше <div>\n`;
  } else {
    round += 1;
    max = curr - 1;
    str = `${str} <div> Round #${round} ~ ${curr} больше <div>\n`;
  }
} while ( curr !== VAL);

document.querySelector('.main').innerHTML = str;
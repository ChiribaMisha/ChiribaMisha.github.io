let start = 9991999;
let maxNums = 2;

const checkNum = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; 
  };
  return true;
};

const findSimpleNum = (strt) => {
  let radius = 0;
  let foundNums = 0;
  let str = ' ';
  while (foundNums < maxNums) {
    if (checkNum(strt + radius)) {
      str = `${str} ${strt + radius}`;
      foundNums += 1;
    };
    if (checkNum(strt - radius)) {
      str = `${str} ${strt - radius}`;
      foundNums += 1;
    };
    radius = radius + 1;
  };
  return str;
};

let simpleNums = findSimpleNum(start);
console.log(simpleNums);

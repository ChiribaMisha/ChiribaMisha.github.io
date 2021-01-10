const ship = [
  {
    id: 'first',
    hp: 100,
    dmg: 4,
  },

  {
    id: 'second',
    hp: 40,
    dmg: 15,
  },
];

let round = 0;
let str = ' ';

while((ship[0].hp > 0) && (ship[1].hp > 0)) {
  ship[0].hp -= ship[1].dmg;
  ship[1].hp -= ship[0].dmg;
  str = `${str} <div>Round #${round} ~ first: ${ship[0].hp} HP, second: ${ship[1].hp} HP</div> \n`;
  round ++;
};

if (ship[0].hp > 0) {
  str = `${str} <div> first win! </div> \n`;
} else {
  str = `${str} <div> second win! </div> \n`;
}

document.querySelector('.main').innerHTML = str;
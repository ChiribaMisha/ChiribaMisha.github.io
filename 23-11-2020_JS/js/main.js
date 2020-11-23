let a = 1;
let b = 2;
let c = 1;

let d = b * b - 4 * a * c;

let x1 = (-b + Math.sqrt(d)) / (2 * a);
let x2 = (-b - Math.sqrt(d)) / (2 * a);

let aEl = document.querySelector('.a');
  aEl.innerHTML = ('a = ' + a);

let bEl = document.querySelector('.b');
  bEl.innerHTML = ('b = ' + b);

let cEl = document.querySelector('.c');
  cEl.innerHTML = ('c = ' + c);

let dEl = document.querySelector('.d')
dEl.innerHTML = ('d = ' + d);


if (d < 0) {
  let dEl = document.querySelector('.d')
  dEl.innerHTML = ('d = ' + d + '  Так как дискриминант меньше нуля, то уравнение не имеет действительных решений.')
}

else if(d == 0) {
  let x1El = document.querySelector('.x1');
  x1El.innerHTML = ('x1 = ' + x1 + '  Так как дискриминант равен нулю то, квадратное уравнение имеет один действительный корень.');
}

else  {
  let x1El = document.querySelector('.x1');
  x1El.innerHTML = ('x1 = ' + x1);

  let x2El = document.querySelector('.x2');
  x2El.innerHTML = ('x2 = ' + x2);

}





















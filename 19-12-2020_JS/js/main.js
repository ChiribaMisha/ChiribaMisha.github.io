const arr = [5, 23, -110, 3, 18, 0, 14];
let result = ' ';
let result1 = ' ';

console.log(arr);

//a

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2) {
    result+= `${arr[i]} `;
  };
};

console.log("Нечетные числа массива:",result);

//b
let arr1 = arr.slice();
for (let i = 0; i < arr1.length; i++) {
  arr1[i] *= 20;
};

console.log(arr1);


//c 

for (let i = 0; i < arr.length; i++) {
  if ( arr[i] > 0) {
    if ( arr[i] % 2) {
      result1 += `${arr[i]} `;
    };
  };
};

console.log("Положительные нечетные числа: ",result1);


//d 
let sum = null;
for (let i = 0; i < arr.length; i++) {
  if ( arr[i] % 3) {
    sum += arr[i];
  };
};

console.log("Сумма остатков от целочисленных делений на 3:",sum);


//e

function checkNum() {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 5) {
          return true;
      }
  }
  return false;
}

console.log(checkNum());

//f

let arr2 = arr.slice();
arr2.shift();
console.log(arr2);


//g

arr.sort(function(a, b){return a - b});
console.log(arr);

//h
function checkKrat() {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 5) {
          return true;
      }
  }
  return false;
}

console.log(checkKrat());

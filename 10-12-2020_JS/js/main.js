let arr = new Array();

//случайные числа
for (let i = 0; i < 5; i++) {
  arr[i] = new Array();
  for (let j = 0; j < 5; j++){
    arr[i][j]=Math.floor(Math.random() * (12 - 0 + 1) + 0);
  };
};
console.table(arr);


// основная диагональ
let sum = null;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i][i];
}
console.log("Сумма чисел основной диагонали: " + sum);

// побочная диагональ
let sum1 = null;
for (let i = 0; i < arr.length; i++) {
  sum1 += arr[arr.length - i - 1][i];
}
console.log("Сумма чисел побочной диагонали: " + sum1);

//перестановка местами столбцов
let temp = 0;
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr.length; j++){
    temp = arr[i][2-1];
    arr[i][2-1] = arr[i][3-1];
    arr[i][3-1] = temp;
  }
}
console.table(arr);


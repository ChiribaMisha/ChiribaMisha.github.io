//1

// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [7, 8, 9, 10, 11, 12];

// const arr3 = arr1.slice();
// arr3[1] = arr2.slice();
// arr3[arr3.length -1] = arr2.slice();
// arr3[arr3.length / 2] = arr2.slice();

// console.log("arr1 = ", arr1);
// console.log("arr2 = ", arr2);
// console.log("arr3 = ", arr3);

//2 

// let number = 123456789;
// let quantity = 0;

// while (number > 1) {
//   number /= 10;
//   quantity++;
// }

// console.log(quantity);


//3

let arr = new Array();

for (let i = 0; i < 4; i++) {
  arr[i] = new Array();
  for (let j = 0; j < 4; j++){
    arr[i][j]=Math.floor(Math.random() * (12 - 0 + 1) + 0);
  };
};
console.table(arr);


let sum1 = null;
for (let i = 0; i < arr.length; i++) {
  sum1 += arr[arr.length - i - 1][i];
}
console.log("Сумма чисел побочной диагонали: " + sum1);
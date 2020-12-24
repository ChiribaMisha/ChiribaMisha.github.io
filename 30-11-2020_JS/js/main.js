//1

const genArr = () => {
  return [1, 4, 6, 3, 7, 2, 8, 0, 2];
};

const fixArr = (index, array) => {
  if (array[index] !== (array[index -1] + array[index + 1])) {
      array[index] = (array[index -1] + array[index + 1]);
  };
  return array;

};


const arr = genArr();
fixArr(2, arr);
fixArr(5, arr);
fixArr(7, arr);
console.log(arr);


// 2

// const randomInt = (min, max) => {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }


// const genArr = (len, min1, max1) => {
//   let arr = [];
//   for (let i = 0; i < len; i++) {
//     arr.push(randomInt(min1, max1));
//   ;}
//   return arr;
// };

// const minvalue = (arr) => {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     };
//   };
//   return min;

// };

// const decrElem = (index, array, diff) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++){
//     newArr[i] = array[i];
//   }
//   newArr[index] = newArr[index] - diff;
//   return newArr;
// };


// const arr = genArr(6, 1, 12);
// let min1 = minvalue(arr);
// let arr1 = decrElem(0, arr, min1); 
// let lastEl = arr.length - 1;
// arr1 = decrElem(lastEl, arr, min1);

// console.log(arr, arr1);



// 3

// const arr2 = [1, 2, 3, 4, 5];
// console.log(arr2);

// for(let i = 0; i < arr2.length; i++) {
//   arr2[i] *= 3;
//   arr2[i] -= 5;
// }

// const arr3 = arr2;
// console.log(arr3);


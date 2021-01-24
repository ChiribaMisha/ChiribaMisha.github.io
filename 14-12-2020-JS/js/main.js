let str = ' ';
let str1 = ' ';
let btnEl = document.querySelector('.btn');
let btnEl1 = document.querySelector('.asd');

const searchLongestWord = (arr) => {
  let longestWord = 0;
  let word = null;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > longestWord) {
      longestWord = arr[i].length;
      word = arr[i];
    };
  };
  console.log("Самое длинное слово: ",word);
};

btnEl.addEventListener('click', () => {
  let textEl = document.querySelector('.textar').value.split(" ");
  const arr = textEl;
  
  for(let i = 0; i < arr.length; i++) {
    str = `${str} <div class = "int"><input class="textinpt" value = "${arr[i]}"></div>`;
  };
  
  searchLongestWord(arr)
  document.querySelector('.main1').innerHTML = str;
});

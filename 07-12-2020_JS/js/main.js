const bodyColor = ['yellow', 'green', 'red', 'blue', 'orange'];
const transmission = ['automatic', 'manual'];
const conditioner = ['installed', 'absent'];
const interiorFinishing = ['leather','fabric', 'combined'];

const random = (n) => {
  for (let i = 0; i < 1000; i++) {
    let rand = Math.floor(Math.random() * n.length);
    return (n[rand]);
  };
};


const randomInt = (min, max) => {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

const arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push({'bodyColor': random(bodyColor), 'transmission': random(transmission), 'conditioner': random(conditioner),'interiorFinishing': random(interiorFinishing)})
}

const unique = (a) => {
  let isAdded = null;
  let arr = [];
  for(let i = 0; i < a.length; i++) {
      isAdded = arr.some(function(v) {
          return isEqual(v, a[i]);
      });
      if( !isAdded ) {
          arr.push(a[i]);
      }
  }
  return arr; 
}
const isEqual = (a, b) => {
  let prop;
  for( prop in a ) {
      if ( a[prop] !== b[prop] ) return false;
  }
  for( prop in b ) {
      if ( b[prop] !== a[prop] ) return false;
  }
  return true;
}

let arr1 = unique(arr);
console.log(arr1);


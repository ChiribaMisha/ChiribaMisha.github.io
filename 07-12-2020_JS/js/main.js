const mainObj = {
  arr: [],
};

const bodyColor = ['yellow', 'green', 'red', 'blue', 'orange'];
const transmission = ['automatic', 'manual'];
const conditioner = ['installed', 'absent'];
const interiorFinishing = ['leather','fabric', 'combined'];

function Item(b, t, c, i) {
  this.bodyColor = b;
  this.transmission = t;
  this.conditioner = c;
  this.interiorFinishing = i;
};

let count = 1;
bodyColor.forEach(bodyColor => {
  transmission.forEach(transmission => {
    conditioner.forEach(conditioner => {
      interiorFinishing.forEach(interiorFinishing => {
        let tempObj = new Item(bodyColor, transmission, conditioner, interiorFinishing);
        let tempStr = `${count}${bodyColor[0]}${transmission[0]}${conditioner[0]}${interiorFinishing[0]}`.toUpperCase();
        if (tempStr.length <= 5) {
          tempObj.code = ('0000' + tempStr).slice(1);
        } else {
          tempObj.code = ('0000' + tempStr).slice(2);
        }
        mainObj.arr.push(tempObj);
        count ++;
      });
    });
  });
});

console.log(mainObj);

// оголошення
// 1
function filter1(number, index) {
  console.log({ number, index });
  return number / index;
}

const filter3 = function filter2(number, index) {
  return number / index;
};

const filter2 = (number,index) => {
  return number / index;
};
const filter4 = (number, index) => number / index;



// виклик

const number = 4;
const index = 3;
const resF1 = filter1(10, 5);
const resF2 = filter1(number, index);
const resF3 = filter1(resF2, resF1);
console.log({ resF1, resF2, resF3 })

const myArr = {
  map: filter1,
};
const lstres = myArr.map(56, 23);
const name = 'vasy';
const user = { name };
console.log({ lstres })
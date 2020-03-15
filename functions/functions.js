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
console.log( {lstres} )



const operator = ( a , b) => {

  console.log({a , b});
  if (a > b){
    console.log("LOL")
  }
  else {
    loger('PISun')
  }
};


operator( 'Oleg', 'Roman');
function loger (str){
  console.log({str});
  return str;
}

function chckAge(age) {
  return(age > 18) ? true: console.log("PISOV v DYpY");
}

console.log(chckAge(21))
function checkAge1(age1) {
  return(age1 > 18) || console.log("PISOV v DYpY1");
}
console.log(checkAge1( 17));

function checkcalcul(x , n) {
  let resylt = x;
  for(let i = 1; i < n; i++){
    resylt = x * resylt;
  }
  return resylt
}

// console.log(checkcalcul(2, 2))
const resalt = checkcalcul(2,5);

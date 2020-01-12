// OPERATORS

// 1. if else esle if

const age = 10;

if(age < 10 && age > -1) {
  console.log('a === 10')
} else if (age ===2 ) {
  console.log('a === 10')
} else {
  console.log('a !== 10')
}
// logical operators
// && i, || aбо, ? : (if else)

const isChildValue = age === 10 ? 'child' : 'adult';
console.log('isChildValue --->', isChildValue)
console.log('isChildValue 2 --->', age > 0 && age < 10)
console.log('isChildValue 2 --->', age > 10 || age < 1)
// if(age === 10) {
//   return 'child'
// } else {
//   return 'adult'
// }

// for
//           0  1                        9
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [];
// arr[1] === 2
for (let i = 0; i < 5; i++) {
  console.log('i --->', arr[i])
  arr1[i] = arr[i]
}

// do while
let i = 0
do {
  i = i + 1;
  console.log(i)
} while (i !== 10)

// swich
let type = 'UA'

switch (type) {
  case "UA":{
    console.log('ua');
    break;
  }
  case "USA": {
    console.log('USA')
    break;
  }
  case "I": {
    console.log('I');
    break;
  }
  default: {
    console.log('________')
  }
}

console.log('arr1 --->', arr1)
// arr.forEach((value, index) => {
//   console.log('i --->', value)
//   console.log('index --->', index)
// })




// function
// const isChild  = function  (userAge, username) {
//   console.log('--- isChild run', username)
//   return userAge <= 10 ? 'child' : 'adult';
// }
//
// const isChild2  = (userAge) => userAge === 10 ? 'child' : 'adult';
// const isChild1  = function (userAge) {
//   if(userAge === 10) {
//     return 'child'
//   } else {
//     return 'adult'
//   }
// }
//
// console.log('----> isChild', isChild(5, 'pety'))
// console.log('----> isChild', isChild(20))
// console.log('----> isChild1', isChild1(2))
// console.log('----> isChild2', isChild2(2))
// 1. Змінні
// number
var _number = 2;
// string
var _string = 'hi';
// bool
var _boll = true; // false
// arr масив
var arr = [1, 2, 4];

// object
var _object = { a: 1, b:2 };
var user = {
    name: "roman",
    surname: "tymets",
    age: 23,
    address: {
        city: 'ternopil',
        strreat: 'asdas'
    }
};
console.log('----->', user.name)

//  різниця між простим і складним типом
var name = 'roman';
var secondName = name;
console.log('-- name --->', name);
console.log('-- secondName --->', secondName);
secondName = 'vova';
console.log('-- name 2 --->', name);
console.log('-- secondName 2 --->', secondName);

var user1 = { name: 'roman' };
var user2 = user1;
console.log('-- user1.name --->', user1.name);
console.log('-- user2.name --->', user1.name);
user2.name = 'vova';
console.log('-- user2.name --->', user2.name);
console.log('-- user1.name --->', user1.name);

// const let
const a1 = 2;
let b1 = 2;

console.log('--------End--------')

const a = 2;
const b = 5;

x = a+b;
console.log(x)


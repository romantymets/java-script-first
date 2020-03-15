const {  anyArray, tags, numberArrays, news  } = require('./data');
// https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array
console.log('---------------------1----------------------------')
for(let i = 0; i < numberArrays.length; i++) {
  //console.log(`------> numberArrays[${i}]`)
  console.log(`------> numberArrays[${i}] = ${numberArrays[i]}`)
}
console.log('---------------------2----------------------------')
for(let i = numberArrays.length - 1; i !== -1; i--) {
  //console.log(`------> numberArrays[${i}]`)
  console.log(`------> numberArrays[${i}] = ${numberArrays[i]}`)
}

numberArrays.push(24);
//numberArrays[numberArrays.length - 1] = 34;
console.log('---------------------3----------------------------')
// forEach
numberArrays.forEach((value, index) => {
  console.log(`------> numberArrays[${index}] = ${value}`)
});
// join()
console.log('tags --->', tags.join('-'));

// map
const mapper = function(tag, index) {
  return `${tag}-1 ${index}`;
};
const newTags = tags.map(mapper);

console.log('-----> newTags:', newTags)



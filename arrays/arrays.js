const {  anyArray, tags, numberArrays, news  } = require('./data');

  // 1:  вивести всіх новини за допомогою for
  const array = [];
  // 2:  вивести всіх новини за допомогою forEach
  // 3:  замапити новини за допомогою map (додати нове поле tag === із масиву tags)
  // 4:  використати joint
  // 5: * відфільтрувати масив  numberArrays так щоб були тільки парні числа (.filter)
  // 6: * посортувати numberArrays (.sort)
console.log('-----------1--------------')
for(let i=0; i < news.length; i++){
  const singleNew = news[i]
  console.log(`------news[${i}] = `, singleNew)
}
console.log('-------------2----------')

//forech
news.forEach((singleNew, index) => {
  const str = `-----news[${index}]`
  console.log(str,singleNew)
});
numberArrays.forEach((value, ) => {
  console.log(`array numbers`,value)
})
console.log('--------3---------')
const mapper = function (tag, index) {
  return index === 0 ? 'dsgsdgsd':'dddfzxvzx';
};
const mapedtags = tags.map(mapper);
console.log(mapedtags)

console.log('----5-----')
const mapedNews = news.map((singleNew, index ) => {
  // singleNew.tag = tags[index]
  if (index %2 === 0) {
    singleNew.tag = tags[index]
  }else {
    singleNew.tag = 'first';
    delete singleNew.description;
  }
  return singleNew;

})
console.log(mapedNews)

console.log('-------6---------')
const k = numberArrays.join('_')
for(let k = 0; k < numberArrays.length; k++){
  console.log(`------ = ${k} =${numberArrays[k]}`)
}

// numberArrays.forEach((value, index) => {
//   console.log(`-----number ${index} = ${value}`)
// })


console.log('Filter------------------')

const N = 2;
function filtredArr(number){
return number % N ;
}
const gh = numberArrays.filter(filtredArr);

console.log(gh);





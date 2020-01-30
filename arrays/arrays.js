const {  anyArray, tags, numberArrays, news  } = require('./data');

  // 1:  вивести всіх новини за допомогою for
  const array = [];
  // 2:  вивести всіх новини за допомогою forEach
  // 3:  замапити новини за допомогою map (додати нове поле tag === із масиву tags)
  // 4:  використати join
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
const str = numberArrays.join(',')

for(let k = 0; k < str.length; k++){
  console.log(`------ = ${k} =${str[k]}`)
}

// numberArrays.forEach((value, index) => {
//   console.log(`-----number ${index} = ${value}`)
// })


console.log('Filter------------------')


function filtredArr(number, index){
const res = number % 2 ===0;
return !res;
}
const gh = numberArrays.filter(filtredArr);

console.log(gh);

gh.forEach((n) => console.log(n))



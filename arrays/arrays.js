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

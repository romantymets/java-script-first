console.log("Zamukania");
function urlGenerator(domen) {
  return function domenGenerator(url) {
    return `https://${url}.${domen}`
  }
}
const comUrl = urlGenerator('com');
console.log(comUrl('goggle'));
console.log(comUrl('netlic'));

person = {
  age: 18,
  name: 'oleg',
  job: 'realtor',
  logInfo: function () {
    console.group(`${this.name} info:`);
    console.log(` Name is: ${this.name}`);
    console.log(` Age is: ${this.age}`);
    console.log(` Job is: ${this.job}`);
    console.groupEnd()
  }
}
person1 = {
  age: 19,
  name: 'olia',
  job: 'bezrob'
}
person.logInfo();
person.logInfo.bind(person1)();


// область видимості

// global scope;
//const name = 'roman';
const firstName = 'tymets';
function log () {
  function log1 () {
    const name = 'vova';
    console.log('---->', name);
  }
  // will be error
  // console.log('---->', name);
  const res  = log1();
  return res;
}
//log();


// this

function logFirsName() {
  console.log('---->', this.name);
}
const user1 = {
  name: 'roman',
  logFirsName: logFirsName,
  logLastName: function () {
    console.log('---->', this.lastName);
  },
};
user1.logFirsName();
user1.logLastName();

// logFirsName.apply({ name: 'vova' });
// logFirsName.call({ name: 'vova' });
// const withYura = logFirsName.bind({ name: 'yura' });
// withYura();

// напиши обєкт student

function logAge() {
  // her use this
  console.log('Haw old are you -- ', this.age)
}
function logName() {
  // her use this
  console.log('whot is your name--- ', this.name)
}

const student1 = {
  name: 'roman',
  age: 21,
  logAge: logAge,
  logName: logName
};

const student2 = {
  name: 'vova',
  age: 19,
  logAge: logAge,
  logName: logName
};

// викличи logName()
// викличи student1.logName()
// викличи student2.logName.apply(student1)
// викличи student1.newLogName = student1.newLogName.bind(student2) and student1.newLogName()

// те саме для logAge
console.log("-------1-------");
logName()
console.log("-------2-------");
student1.logName()
student1.logAge.apply(student2)
console.log("-------3-------");
student2.logName()
student2.logName.apply(student1)
// student1.newLogName = student1.newLogName.bind(student2);
// student1.newLogName()
console.log("-------4-------");
const NewLogName = logName.bind(student2)
NewLogName()
console.log("-------5-------");
logAge.call({age:25});

const New = logName.bind({name: 'Vasul'});
New()
student2.logAge.call(student1)
console.log("-------6-------");
console.log("age" in student1);
for ( let key in student1) {
  console.log(student1[key], "-----", key);
}
let sallary = {
  oleg: 600,
  Vasa: 800,
  Peta: 200
}
console.log("-------6-------");
for(let newsalary in sallary){
  console.log("New salary", newsalary, sallary[newsalary] * 2)
}

console.log("-------7-------");
const sallary1 = {
  oleg: 600,
  Vasa: 800,
  sallaryOleg: sallaryOleg,
  sallaryVasa: sallaryVasa
}
function  sallaryOleg () {
  console.log("Oleg", this.oleg);
}
function  sallaryVasa () {
  console.log("Vasa", this.Vasa);
}
sallary1.sallaryOleg()
sallary1.sallaryVasa()

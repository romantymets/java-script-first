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
}
function logName() {
  // her use this
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
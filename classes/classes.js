/**
 * https://www.w3schools.com/js/js_classes.asp
 * OOП - обєктно орієнтоване програмвання
 * три принципи
 * 1) інкапсуляція - принцип чорної скриньки приватні  публічні змінні
 * 2) наслідування - один клас може наслідувати все від іншого (батьківськи (parent) дитячий (child))
 * .....не існує в js ......
 * 3) поліморфізм - один інтерфейс багато реалізацій
 *
 * */
// inteface CarInterace {
//   drive () {}
// }
// class Car extends CarInterace

class Car {
  constructor(name) {
    this.name = name
  }
  //name = 'bmv'
  color = 'blue'
  _petrolCapacity = 9;

  _startEngine () {
    console.log('engine has started for:', this.name)
  }

  drive () {
    this._startEngine();
    if(this._petrolCapacity !== 0) {
      console.log('I am driving now:', this.name)
      this._petrolCapacity = this._petrolCapacity - 1;
    }
  }
}

class HevyCar extends Car {
  constructor(name) {
    super(name);
  }
  wight = 1;
  driveBack() {
    console.log('I am driving back now:', this.name)
  }
  static bibi () {
    // this -  не існє в статичних методах
    console.log('I am dibi  now:', this)
  }

  get maxWight() {
   console.log('i am returning wight now:', )
    return this.wight;
  }
  set maxWight(w) {
    console.log('i am settin wight now:', w)
    if(w > 0) {
      this.wight = w;
    }
  }
}

const bmv = new Car('bmv');
const lada = new Car('lada');
console.log(bmv.name);
const humer = new HevyCar('hummer');
console.log(lada.name)
humer.maxWight = -1;
console.log(humer.maxWight)

bmv.drive();
humer.drive();
humer.driveBack();
HevyCar.bibi()

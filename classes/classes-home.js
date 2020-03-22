/**
 * https://www.w3schools.com/js/js_classes.asp
 * OOП - обєктно орієнтоване програмвання
 * три принципи
 * 1) інкапсуляція - принцип чорної скриньки приватні  публічні змінні
 * 2) наслідування - один клас може наслідувати все від іншого (батьківськи (parent) дитячий (child))
 * .....не існує в js ......
 * 3) поліморфізм - один інтерфейс багато реалізацій
 *
 *
 *  Створити клас телефон із 5 властивостями і двома методами
 *  Створити клас android iPhone які наслідуються із класу телефон із 2 додатковими методами
 *  Створити 1 статичний мтод
 *  Створити гетер сетер
 * */
/**
class Telephone {
  constructor(brend) {
    this.brend = brend;
  }
  color = 'red';
  _displey ='tachskrin';
    camera = '48 mp';
      battery = '4000 AH'
       simcard = 2;

      present() {
    console.log('I have a ', this.brend)
  }
operationSystem (opname){
        this.opname = opname;
        console.log('My op is', this.opname)
}
}
const samsung = new Telephone('Samsung');
console.log(samsung.present('Samsung'));
console.log(samsung.operationSystem('Android'));

const ios = new Telephone('Iphone');
console.log(ios.present('Iphone'));
console.log(ios.operationSystem('IOS'));


class Iphone extends Telephone {
  constructor(brend){
    super(brend)
  }
applestore = true;

  get showstore() {
    console.log('i am ifon:', );
    return this.applestore;
  }
  set showstore(w) {
    console.log('i am settin wight now:', w);
    if(w !== true) {
      this.applestor = w;
    }
  }
}

console.log('-----------1--------------')
const iphone = new Iphone('Iphone');
iphone.present()
iphone.operationSystem('notAndroid')
**/
class Animal {
  static type = 'Animal';
  constructor(option){
this.name = option.name;
    this.age = option.age;
    this.color = option.color;
    this.hastail = option.hastail;
    this.size = option.size;
  }


  sayhelo(){
    consol.log('Helo')
  }
  voise (){
    console.log("I am Animal:",this.name)
  }
}
const zebra = new Animal({
  name: 'Zebra',
  age: 7,
  color: 'white',
  hastail: true,
  size: 'small'
});
zebra.voise()
console.log(Animal.type);

console.log(zebra);

class Cat extends Animal{
  static type = 'Cat'
  constructor(options){
    super(options);
    this.wool = options.wool;
  }

  voise (){
    console.log("I am Animal:",this.name)
  }


}

const cat = new Cat({
  name: 'Cat',
  age: 7,
  color: 'blac',
  hastail: true,
  size: 'small',
  wool: 'bald'
});

console.log(Cat.type);
console.log(cat)
cat.voise()
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

const iphone = new Telephone('Iphone');
console.log(iphone.present('Iphone'));
console.log(iphone.operationSystem('IOS'));


class Iphone extends Telephone {
  constructor(brend){
    super(brend)
  }

}
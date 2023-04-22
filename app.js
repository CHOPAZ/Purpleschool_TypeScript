"use strict";
/* Getter и Setter - позволяют переопределить как будет присваиваться или получаться свойство объекта
*/
/* 'user-...' */
class User {
    set login(l) {
        this._login = 'user-' + l;
    }
    get login() {
        return 'no_login';
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);
/* ОГраничения Getter и Setter
  
  1. Если мы не укажем тип для l - l автоматичеки будет string, - это свойство того, что возвращает getter, должен и получать setter
  2. Для Getter и Setter можно определить что l может быть не только string но и number
  3. Если не использовать setter, то свойство _login будет readonly, т.е его нельзя модифицировать
  4. Getter и Setter не могут быть асинхронными
*/

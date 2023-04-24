"use strict";
/* Композиция VS Наследование


*/
/* Наследование */
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const users = new Users();
users.push(new User('Vasya')); // можно применять методы массива
users.push(new User('Petya')); // можно применять методы массива
console.log(users.toString()); //[object Object] - не имеет смысл этот метод
/* Вот такие утилетарные методы (toString(), toLocaleString() и тд) должны быть правильно override и  в них есть бизнес смысл. Поэтому такие утилетарные типы не стоит так мешать с бизнес типасми */
/* Как лучше. Композиция - из нескольких элементов*/
class UsersList {
    push(u) {
        this.users.push(u);
    }
}
/* Второй пример. Изменение предметной облости */
/* Одна предметная область Payment. Как отдельный домейн */
class Payment {
}
/* Друггая предметная область  UserWithPayment. */
class UserWithPayment extends Payment {
}
/* Как сделать правильно. UserWithPayment2 - некторый агрегационный класс, который в результате делает композицию из User и Payment */
class UserWithPayment2 {
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
/* 1. Наследование лучше использовать когда наследование происходит в рамках одной доменной области
   2. Наследование лучше НЕ использовать, когда наследование происходит от агрегационных, сложных, внутренних, например массивов  Array<User>, но от маленьких утилетарных классов например Error можно так делать
   3. Наследование лучше НЕ использовать, когда идет пересечение доменной области. Композиция упростит код, и уменьшит связанность
*/ 

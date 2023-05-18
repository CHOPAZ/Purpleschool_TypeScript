"use strict";
/*
  Фабрика декораторов
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Порядок вызова декораторов */
// @nullUser
let UserService = class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
};
UserService = __decorate([
    setUser(10)
    // @threeUserAdvanced
    // @setUserAdvanced(4)
    ,
    log()
], UserService);
function nullUser(target) {
    target.prototype.users = 0;
}
/* Необходимо вместо 0 установить определенное число пользователей */
function setUser(users) {
    console.log('setUsers init');
    return (target) => {
        console.log('setUsers run');
        target.prototype.users = users;
    };
}
function log() {
    console.log('log init');
    return (target) => {
        console.log('log run');
    };
}
/* вызов SetUser как декоратор ^ */
console.log(new UserService().getUsersInDatabase()); //1000
/* ^ Получили 1000, а хотели 0
  Потому что function nullUser выполняется еще на этапе компиляции приложения, а потом класс UserService
  Если у класса уббрать присвоение 1000, т.е users: number; то тогда бы получили 0
*/
/* Иная запись декоратора
  Вместо модификации прототипа класса, модифицировать поведение класса отнаследовавшись от исходного класса, которыйц декорируем
*/
function threeUserAdvanced(constructors) {
    return class extends constructors {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
/* необходимо вместо 3 установить определенное число пользователей */
function setUserAdvanced(users) {
    return (constructors) => {
        return class extends constructors {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
/* threeUserAdvanced - некоторый конструированный класс, не функция, и от этого класса будем наследоваться анонимным классом, где применяем поведение */

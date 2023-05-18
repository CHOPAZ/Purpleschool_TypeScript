"use strict";
/*
  Декоратор метода
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Userservice {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        throw new Error('Ошибка');
    }
}
__decorate([
    Log
], Userservice.prototype, "getUsersInDatabase", null);
function Log(target, //объект к которому относится метод
propertyKey, // название метода getUsersInDatabase
descriptor //
) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    /* переопдееление  descriptor*/
    descriptor.value = () => {
        console.log('no Error');
    };
}
/* Вывод в консоле

  {} - target
getUsersInDatabase - propertyKey
{
  value: [Function: getUsersInDatabase], - сама фукнция которая кидает ошибюку
  writable: true, - параметр, означающий что значение свойства можно менять
  enumerable: false, - если true, то свойство участвует в перечеслении когда например проходим for in
  configurable: true - свойство можно удалять, менять при далнейших вызовах
}
*/
console.log(new Userservice().getUsersInDatabase());
/* Декоратор меняющий метод */

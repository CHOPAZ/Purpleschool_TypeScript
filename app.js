"use strict";
/*
   Порядок декораторов
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* Универсальный дкеоратор */
function Uni(name) {
    console.log(`Инициализация: ${name}`);
    return function () {
        console.log(`Вызов: ${name}`);
    };
}
let MyClass = class MyClass {
    method(_) {
    }
    static method2(_) {
    }
    constructor(_) {
    }
};
__decorate([
    Uni('Свойство'),
    __metadata("design:type", Object)
], MyClass.prototype, "props", void 0);
__decorate([
    Uni('Method'),
    __param(0, Uni('Параметр method')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "method", null);
__decorate([
    Uni('Свойство static'),
    __metadata("design:type", Object)
], MyClass, "props2", void 0);
__decorate([
    Uni('Method static'),
    __param(0, Uni('Параметр method static')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyClass, "method2", null);
MyClass = __decorate([
    Uni('Класс'),
    __param(0, Uni('Параметр constructor')),
    __metadata("design:paramtypes", [Object])
], MyClass);
/*
  Инициализация: Свойство
  Вызов: Свойство
  Инициализация: Method
  Инициализация: Параметр method
  Вызов: Параметр method
  Вызов: Method
  Инициализация: Свойство static
  Вызов: Свойство static
  Инициализация: Method static
  Инициализация: Параметр method static
  Вызов: Параметр method static
  Вызов: Method static
  Инициализация: Класс
  Инициализация: Параметр constructor
  Вызов: Параметр constructor
  Вызов: Класс
*/ 

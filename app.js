"use strict";
/*
  Декоратор accessor
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Userservice {
    set users(num) {
        this._users = num;
    }
    get users() {
        return this._users;
    }
    getUsersInDatabase() {
        throw new Error('Ошибка');
    }
}
__decorate([
    Log()
], Userservice.prototype, "users", null);
/* Декоратор для set и get */
function Log() {
    return (target, _, descriptor) => {
        const oldSet = descriptor.set;
        descriptor.set = (...args) => {
            console.log(args);
            oldSet === null || oldSet === void 0 ? void 0 : oldSet.apply(target, args);
        };
    };
}
const userservice = new Userservice();
userservice.users = 2;
console.log(userservice.users); //[ 1 ] 1
/* если переместим декоратор на get users() - ничего не изменится и выведется [ 1 ] 1
  но декоратор нельзя поставить сразу и на set  и на get
*/

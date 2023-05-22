"use strict";
/*
  Метаданные

  Фактически перенос типов из ts в js в рантайме
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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');
class Userservice {
    getUsersInDatabase() {
        return this._users;
    }
    setUsersInDatabase(num) {
        this._users = num;
    }
}
__decorate([
    Validate(),
    __param(0, Positive()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Userservice.prototype, "setUsersInDatabase", null);
/* Декоратор для set и get */
function Positive() {
    return (target, //userservice
    propertyKey, //setUsersInDatabase
    parametrIndex //укажет на каком месте находится num
    ) => {
        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey)); //[Function: Function] - метод класса
        console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey)); //[ [Function: Number] ]
        console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey)); //undefined - потому что ничего  не возвращаем в методе
        /* Можно глобально в методанные, конкретному объекту добавить какие то свойства  */
        let existParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parametrIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
    };
}
function Validate() {
    return (target, propertyKey, descriptor) => {
        let method = descriptor.value;
        descriptor.value = function (...args) {
            let positiveParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
            if (positiveParams) {
                for (let index of positiveParams) {
                    if (args[index] < 0) {
                        throw new Error('число дольжно быть больше 0');
                    }
                }
            }
            return method === null || method === void 0 ? void 0 : method.apply(this, args);
        };
    };
}
const userservice = new Userservice();
console.log(userservice.setUsersInDatabase(10));
console.log(userservice.setUsersInDatabase(-1));

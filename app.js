"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*  Generic - обобщенный тип позволяет резервировать место для типа, который будет при вызове заменен на определенный

Пример встроенных Generic
*/
const arr = [1, 2, 3]; // interface Array<T> - T generic
/* Промисы */
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const prom = yield new Promise((resolve, reject) => {
            resolve(1);
        });
    });
}
/* Recorc - словарь с ключом значений. drive - string, true - boolean */
const check = {
    drive: true,
    kpp: false
};

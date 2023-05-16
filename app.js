"use strict";
/*
  Служебные типы

  Awaited - представлен в 4.5
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        return [{ name: 'Аналитика', url: 'analytics' }];
    });
}
/* Читабельность типов */
/* x - какая то функция, которую можем эвейтить */
function getArra(x) {
    return __awaiter(this, void 0, void 0, function* () {
        return [yield x];
    });
}
/* старая типизация */
function getArra2(x) {
    return __awaiter(this, void 0, void 0, function* () {
        return [yield x];
    });
}

"use strict";
/* unknown - исключительно в ts - означает что неизвестно что лежит в переменной. переменная может прийти откуда то извне, либо это ошибка какая-то
  таким образом нужно обозначить что есть какая то переменная, тип которой мы заранее не знаем, но не Any

  unknown нельзя положить в любую другую переменную, передать функцию в качестве параметра в которой задан тип, пока не сделаем приведение типов или определим что это за тип
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
let input;
input = 3;
input = ['sf'];
let res = input; // ошибка ts, что тип  unknown не может быть назначен для типа string
let res2 = input; // Работает
/* Как правильно опредеоить что за тип и сделать сужение типов */
function run(i) {
    if (typeof i == 'number') {
        i++; // number
    }
    else {
        i; // unknown
    }
}
run(input);
/* на практике */
/* С TS 4.4 ошибка стала unknown, раньше была any */
/* более явное приведение типов */
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
/* не явная проверка, может ошибка, что где то неправильно прокинули ошибку и пришла строка а не Error */
function getDataForce() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            const e = error;
            console.log(e.message);
        }
    });
}

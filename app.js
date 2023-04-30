"use strict";
/*
  Написать функцию toString, которая принимает любой тип
  и возвращает его строковое представление. Если не может, то
  возвращает undefined
*/
function toString(arg) {
    if (Array.isArray(arg)) {
        return arg.toString();
    }
    switch (typeof arg) {
        case 'string':
            return arg;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return arg.toString();
        case 'object':
            return JSON.stringify(arg);
        default:
            return undefined;
    }
}
console.log(toString(3));
console.log(toString(true));
console.log(toString(['a', 'b']));
console.log(toString({ a: 1 }));
console.log(toString('a'));

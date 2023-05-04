"use strict";
/*
  Манипуляция с типами

  Keyof - позволяет вытащить ключи из объекта, класса, интерфейса
*/
const keyAge = 'age'; // может быть либо age либо name
const keyName = 'name'; // может быть либо age либо name
const keyB = 'd'; // ошибка
/* Когда полезно
  Типизация: функция с двумя generic, где T - сам объект, а К - ключ, из ключей этого объекта (Т)
*/
function getValue(obj, key) {
    return obj[key];
}
const user = {
    name: 'Vasya',
    age: 30
};
const userName = getValue(user, 'name');

"use strict";
/* null -
Особенности его работы в stric режиме
*/
const nl = null;
const n2 = unknown; // нельзя присвоить
const n3 = undefined; // нельзя присвоить
const num1 = null; // в js можно положить null в переменную, в ts за это отвечает strictNullCheck
const num2 = null;
const num3 = null;
const num4 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Vasya'
        };
    }
}
const user4 = getUser();
const name2 = user4.name;
/* Отличия undefined и null:
  null - явно заданный неопределенный объект
  undefined - не заданный объект

  Если осознанно нужно вернуть что этого объекта нет, использовать null


*/
if (user4) {
    const name2 = user4.name;
}

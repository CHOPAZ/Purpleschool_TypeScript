"use strict";
/*  Generic - обобщенный тип позволяет резервировать место для типа, который будет при вызове заменен на определенный

Функция generic
*/
function logMiddleWare(data) {
    console.log(data);
    return data;
}
const res1 = logMiddleWare('10');
const res2 = logMiddleWare(10);
function getSplitedHalf(arr) {
    const len = arr.length / 2;
    return arr.splice(0, len);
}
getSplitedHalf([1, 3, 4]);
getSplitedHalf([1, 3, 4]);

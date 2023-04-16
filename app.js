"use strict";
/* Union - в той или иной переменной могут находится различные типы при различный обстоятельсвах
*/
const arr = ['sdf', 1]; // навести на arr - (string | number)[]
function logId(id) {
    console.log(id);
}
logId(1);
logId('asd');
logId(true);
/* Прри union типе мы не можем работать с методами как со строкой, число  или будеан, потому что console.log() принимает any
  При union типе не обходимо работать раздельно, если тип string сделать что-то одно, при намбор другое -
  СУЖЕНИЕ ТИПОВ(NARROWING) - позволяет сделав runtime проверку, приминить ограничение на наш тип в рамках ts
*/
function logId2(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase); // теперь мы можем получить все методы работы со строкой
    }
    else {
        console.log(id); // наведя на id, останутся типы number | boolean, т.к в первом условии мы его ислючили
    }
}
/*  */
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err); //тип string[]
    }
    else {
        console.log(err); //тип string
    }
}
/* in - возвращает находится ли ключ в объекте */
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj.a); //только a
    }
    else {
        console.log(obj.b); //только b
    }
}
/* Пересекающиеся типы только по одному свойству */

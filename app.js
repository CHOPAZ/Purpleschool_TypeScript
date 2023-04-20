"use strict";
/* never - никогда такого не произойдет.


*/
/* Первый кейс */
function genereateError(message) {
    throw new Error(message);
}
/* Второй кейс */
function dumpError() {
    while (true) { /* .... */ } // цикл который никогда не выйдет
}
/* Рекурсия */
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case 'refund':
            //....
            break;
        case 'checkout':
            //....
            break;
        default:
            throw new Error('нет такого action');
    }
}
function processAction2(action) {
    switch (action) {
        case 'refund':
            //....
            break;
        case 'checkout':
            //....
            break;
        default:
            const _ = action; // const _ - исключает проверку тс на неиспользуемую константьу
            throw new Error('нет такого action');
    }
}
/* Исчерпывающая проверка */
/* Будет ошибка, потому что в функции скрыт возврат undefined */
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
}
/* Исправление
Ошибка уйдет, потому что вызвав функцию genereateError2('asdasf') вы больше никуда не пойдем, т.к она выкидывает ошибку
*/
function genereateError2(message) {
    throw new Error(message);
}
function isString2(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    genereateError2('asdasf');
}
/* never - помогает, ограничить какие-то ветки, какие-то случаи, когда явно необходимо проходить проверку по типам и необходимо какую-то ветку блокировать нсовсем если мы не хотим туда никогда попасть */ 

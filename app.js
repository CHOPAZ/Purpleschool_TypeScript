"use strict";
/* Optional */
const user = {
    login: 'asd@asd.ru',
};
/* Использование опциональный тип в функциях
  в функицях number | undefined - эквивалентно ?
*/
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
function testPass(user) {
    var _a;
    const type = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    const type2 = user.password ? user.password.type : undefined;
    const type3 = user.password.type; // - 100% пароль будет не undefined
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}

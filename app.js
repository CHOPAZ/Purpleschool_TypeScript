"use strict";
/* Type Guard - Функция
*/
function logId(id) {
    if (typeof id === 'string') {
        console.log(id); //string
    }
    else if (typeof id === 'number') {
        console.log(id); //number
    }
    id; //string | number - Флоу типов
}
/* как пишутся type guard */
function logId2(id) {
    if (isString(id)) {
        console.log(id); //string
    }
    else {
        console.log(id); //number
    }
}
function isString(x) {
    return typeof x === 'string';
}
const user = {
    name: 'Pavel',
    email: 'q@q.ru',
    login: 'pasha'
};
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('Пользователь не админ');
    }
}
/* такие проверки не могут быть асинхронными */

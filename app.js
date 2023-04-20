"use strict";
/* Assert - функция, в которой если не ывполняется условие, кидает ошибку
*/
const a = {};
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) { // !!obj - проверка на null    
        return;
    }
    throw new Error('Не пользователь');
}
assertUser(a);
a.name = 'Вася';

"use strict";
/* Приведение типов
*/
let a = 5;
let b = a; //ошибка потомучто string нельзя присвоить number
let b1 = a.toString(); // преобразовали в string 
let c = 'asd';
let d = parseInt(c); //преобразовали string в number
let e = new String(a), ж; // не string, a String - интерфейс контруктора типов для строки
let e1 = new String(a); // ошибка
let e2 = new String(a).valueOf(); // теперь строка
let f = new Boolean(a).valueOf();
const user = {
    name: 'Pavel',
    email: 'q@q.ru',
    login: 'pasha'
};
const user2 = {
    name: 'Pavel',
    email: 'q@q.ru',
    login: 'pasha'
};
/* Первый вариант - минус в том что мы сохранили емаил и логин, хотя они ему не нужны

Мы сможем обратиться только к admin.name и admin.role, хотя под капотом js у admin будет и email и login

Не рекомендуется
*/
const admin = Object.assign(Object.assign({}, user), { role: 1 });
const admin2 = user;
/* Верно */
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1
    };
}

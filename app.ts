/* Приведение типов
*/

let a = 5;
let b: string = a; //ошибка потомучто string нельзя присвоить number
let b1: string = a.toString()// преобразовали в string 

let c = 'asd';
let d: number = parseInt(c); //преобразовали string в number

let e = new String(a)ж // не string, a String - интерфейс контруктора типов для строки
let e1: string = new String(a); // ошибка
let e2: string = new String(a).valueOf(); // теперь строка

let f: boolean = new Boolean(a).valueOf();


/* Объекты */

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: 'Pavel',
  email: 'q@q.ru',
  login: 'pasha'
}

const user2 = {
  name: 'Pavel',
  email: 'q@q.ru',
  login: 'pasha'
} as User

/* Преобразование одного объекта к другому */

interface Admin {
  name: string;
  role: number;
}

/* Первый вариант - минус в том что мы сохранили емаил и логин, хотя они ему не нужны

Мы сможем обратиться только к admin.name и admin.role, хотя под капотом js у admin будет и email и login

Не рекомендуется
*/
const admin: Admin = {
  ...user,
  role: 1
}

/* Тоже не верно */

interface Admin2 {
  name: string;
}

const admin2: Admin2 = user;

/* Верно */

function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1
  }
}
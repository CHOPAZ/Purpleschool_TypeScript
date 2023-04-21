/* Создание класса
*/

class User {
  name: string

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User('Pavel');
console.log(user);
user.name = "Petya"
console.log(user);



/* Будет ошибка, ts не даст так сделать. Что бы исправить:
  1 Вариант в tsconfig найти strictPropertyInitialization и поставить false
  2 Вариант поставить role!
*/
class Admin {
  role: number;
}

const admin = new Admin()
admin.role = 1;
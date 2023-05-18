/*  
  Фабрика декораторов
*/

/* Пример */
interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

/* Порядок вызова декораторов */
// @nullUser
@setUser(10)
// @threeUserAdvanced
// @setUserAdvanced(4)
@log()
class UserService implements IUserService {
  users: number = 1000;
  getUsersInDatabase(): number {
    return this.users;
  }
  
}

function nullUser(target: Function) {
  target.prototype.users = 0;
}

/* Необходимо вместо 0 установить определенное число пользователей */
function setUser(users: number) {
  console.log('setUsers init');
  return (target: Function) => {
    console.log('setUsers run');
    target.prototype.users = users;
  }
}

function log() {
  console.log('log init');
  return (target: Function) => {
    console.log('log run');
  }
}

/* вызов SetUser как декоратор ^ */

console.log(new UserService().getUsersInDatabase()); //1000
/* ^ Получили 1000, а хотели 0
  Потому что function nullUser выполняется еще на этапе компиляции приложения, а потом класс UserService
  Если у класса уббрать присвоение 1000, т.е users: number; то тогда бы получили 0
*/

/* Иная запись декоратора
  Вместо модификации прототипа класса, модифицировать поведение класса отнаследовавшись от исходного класса, которыйц декорируем
*/

function threeUserAdvanced<T extends {new(...args: any[]): {}}>(constructors: T) {
  return class extends constructors {
    users = 3;
  }
}

/* необходимо вместо 3 установить определенное число пользователей */
function setUserAdvanced(users: number) {
  return <T extends {new(...args: any[]): {}}>(constructors: T) => {
    return class extends constructors {
      users = users;
    }
  }
}
/* threeUserAdvanced - некоторый конструированный класс, не функция, и от этого класса будем наследоваться анонимным классом, где применяем поведение */

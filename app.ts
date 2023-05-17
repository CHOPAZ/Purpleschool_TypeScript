/*  
  Декоратор класса
*/

/* Пример */
interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

@nullUser
@threeUserAdvanced
class UserService implements IUserService {
  users: number = 1000;
  getUsersInDatabase(): number {
    return this.users;
  }
  
}

function nullUser(target: Function) {
  target.prototype.users = 0;
}

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

/* threeUserAdvanced - некоторый конструированный класс, не функция, и от этого класса будем наследоваться анонимным классом, где применяем поведение */

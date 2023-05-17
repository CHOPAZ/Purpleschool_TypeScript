/*  
  Паттерн декоратора - декораторы которые будут дальше ( в некст уроках), это компактная реализация паттерна декоратора
  Паттерн декоратора - позволяет обернуть объект или др. в некотурую функцию, которая модифицирует его поведение, при этом можно делать целую композицию из декораторов
*/

/* Пример */
interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  users: number = 1000;
  getUsersInDatabase(): number {
    return this.users;
  }
  
}

function nullUser(obj: IUserService) {
  obj.users = 0;
  return obj
}

function logUsers(obj: IUserService) {
  console.log('Users' + obj.users);
  return obj
}

console.log(new UserService().getUsersInDatabase()); //1000
console.log(nullUser(new UserService()).getUsersInDatabase()); //обернули (задекарировали) - получим 0
console.log(logUsers(nullUser(new UserService())).getUsersInDatabase()); //обернули (задекарировали) - получим Users0 и 0
console.log(nullUser(logUsers(new UserService())).getUsersInDatabase()); //обернули (задекарировали) - получим Users1000 и 0

/* PS
  Паттерн декоратора, который реализовали на функциях, можно реалезовать так же на классах
*/
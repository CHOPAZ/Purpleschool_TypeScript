/*  
  Упражнение - Декоратор CreatedAt

  Декоратор, кторый добавляет свойство
  createdAt в класс, фиксируя дату создания
*/

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}
@CreatedAt
class Userservice implements IUserService {
  users: number = 1000;
  getUsersInDatabase(): number {
    return this.users;
  }
}

function CreatedAt<T extends { new (...args: any[]): {}}>(constructor: T) {
  return class extends constructor {
    createdAt = new Date()
  }
}


console.log(new Userservice()); //Userservice { users: 1000, createdAt: 2023-05-18T17:13:43.959Z } - декоратор написан верно
// console.log(new Userservice().createdAt); // не сможем обратиться к createdAt, потому что наличие декораторов на классах никак не влияет на типы класса. Userservice класс типа IUserService, и у него нет createdAt 

/* подход - дополнительный тип*/
type CreatedAt = {
  createdAt: Date
}
console.log((new Userservice() as IUserService & CreatedAt).createdAt);
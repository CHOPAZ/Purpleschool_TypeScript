/*  
  Декоратор accessor
*/

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class Userservice implements IUserService {
  private _users: number;

  @Log()
  set users(num: number) {
    this._users = num;
  }

  get users() {
    return this._users
  }

  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

/* Декоратор для set и get */

function Log() { 
  return (
    target: Object, 
    _: string | symbol, 
    descriptor: PropertyDescriptor
  ) => {
    const oldSet = descriptor.set;
    descriptor.set = (...args: any) => {
      console.log(args);
      oldSet?.apply(target, args)
    }
  }
}

const userservice = new Userservice();
userservice.users = 2
console.log(userservice.users); //[ 1 ] 1

/* если переместим декоратор на get users() - ничего не изменится и выведется [ 1 ] 1
  но декоратор нельзя поставить сразу и на set  и на get
*/




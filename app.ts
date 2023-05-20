/*  
  Декоратор свойст
*/

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class Userservice implements IUserService {
  @Max(100)
  users: number;

  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

/*  */

function Max(max: number) { 
  return (
    target: Object, //Userservice
    properyKey: string | symbol, // users
  ) => {
    let value: number;
    const setter = function(newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значение больше ${max}`);
      } else {
        value = newValue
      }
    }

    const getter = function() {
      return value;
    }

    Object.defineProperty(target, properyKey, {
      set: setter,
      get: getter
    })
  }
}

const userservice = new Userservice();
userservice.users= 1
console.log(userservice.users);
userservice.users = 1000;
console.log(userservice.users)



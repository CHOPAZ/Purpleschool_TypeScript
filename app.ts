/*  
  Декоратор параметра
*/

interface IUserService {
  getUsersInDatabase(): number;
}

class Userservice implements IUserService {
  private _users: number;


  getUsersInDatabase(): number {
    return this._users
  }

  setUsersInDatabase(@Positive() num: number, @Positive() num2: number): void {
    this._users = num
  }
}

/* Декоратор для set и get */

function Positive() { 
  return (
    target: Object, //userservice
    propertyKey: string | symbol, //setUsersInDatabase
    parametrIndex: number //укажет на каком месте находится num
  ) => {
    console.log(target); //{}
    console.log(propertyKey); //setUsersInDatabase
    console.log(parametrIndex); //0
  }
}

const userservice = new Userservice();






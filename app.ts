/*  
  Метаданные 

  Фактически перенос типов из ts в js в рантайме
*/

import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY')

interface IUserService {
  getUsersInDatabase(): number;
}

class Userservice implements IUserService {
  private _users: number;


  getUsersInDatabase(): number {
    return this._users
  }

  @Validate()
  setUsersInDatabase(@Positive() num: number): void {
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
    console.log(Reflect.getOwnMetadata('design:type', target, propertyKey)); //[Function: Function] - метод класса
    console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey)); //[ [Function: Number] ]
    console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey)); //undefined - потому что ничего  не возвращаем в методе

    /* Можно глобально в методанные, конкретному объекту добавить какие то свойства  */
    let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || []
    existParams.push(parametrIndex);
    Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey)
  }
}

function Validate() {
  return (
    target: Object, 
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ) => {
    let method = descriptor.value;
    descriptor.value = function(...args: any) {
      let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
      if (positiveParams) {
        for(let index of positiveParams) {
          if (args[index] < 0 ) {
            throw new Error('число дольжно быть больше 0')
          }
        }
      }
      return method?.apply(this, args)
    }
  }
}

const userservice = new Userservice();
console.log(userservice.setUsersInDatabase(10));
console.log(userservice.setUsersInDatabase(-1));






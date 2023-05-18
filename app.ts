/*  
  Декоратор метода
*/

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class Userservice implements IUserService {
  users: number = 1000;

  @Log
  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

function Log(
  target: Object, //объект к которому относится метод
  propertyKey: string | symbol, // название метода getUsersInDatabase
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any> //
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  /* переопдееление  descriptor*/
  descriptor.value = () => {
    console.log('no Error');
  }
}

/* Вывод в консоле

  {} - target
getUsersInDatabase - propertyKey
{
  value: [Function: getUsersInDatabase], - сама фукнция которая кидает ошибюку
  writable: true, - параметр, означающий что значение свойства можно менять
  enumerable: false, - если true, то свойство участвует в перечеслении когда например проходим for in
  configurable: true - свойство можно удалять, менять при далнейших вызовах
}
*/

console.log(new Userservice().getUsersInDatabase());



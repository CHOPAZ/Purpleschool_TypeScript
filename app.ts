/*  
  Упражнение - Декоратор перехвата ошибок
*/

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class Userservice implements IUserService {
  users: number = 1000;

  @Catch({rethrow: true})
  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

function Catch({rethrow}: {rethrow: boolean} = {rethrow: false}) { 
  return (
    target: Object, //объект к которому относится метод
    _: string | symbol, // название метода getUsersInDatabase
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any> //
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value;

    /* переопдееление  descriptor*/
    descriptor.value = async (...args: any[]) => {
      try {
        const res = await method?.apply(target, args);
        return res;
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
          if (rethrow) {
            throw error;
          }
        }
      }
    }
  }
}

console.log(new Userservice().getUsersInDatabase());



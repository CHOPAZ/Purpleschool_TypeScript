/*  
  Служебные типы

  ReturnType, Parameters, ConstructorParameters
*/

class User { 
  constructor(public id: number, public name: string) {

  }

}

function getData(id: number): User {
  return new User(id, 'Vasya')
}

/* ReturnType - позволяет удобно получить тип возвращаемой функции и т.д. Полезен когда нельзя явно понять что вернули */
type RT = ReturnType<typeof getData>; //type RT = User
type RT2 = ReturnType<() => void>; //type RT2 = void
type RT3 = ReturnType<<T>() => T>; //type RT3 = unknown - потому что не знаем заранее что будет передано в Т;
type RT4 = ReturnType<<T extends string>() => T>;//type RT4 = string

/* Parameters */
type PT = Parameters<typeof getData>; //type PT = [id: number];
type first = PT[0];// type first = number
type PT2 = Parameters<typeof getData>[0]; //type first = number

/* Получение входящие параметры в классе */
type CP = ConstructorParameters<typeof User>; //type CP = [id: number, name: string]
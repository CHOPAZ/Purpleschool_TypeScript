/*  
  Манипуляция с типами

  Keyof - позволяет вытащить ключи из объекта, класса, интерфейса
*/

interface IUser {
  name: string;
  age: number
}

/* Как получить ключи? */
type KeysOfUser = keyof IUser;

const keyAge: KeysOfUser = 'age' // может быть либо age либо name
const keyName: KeysOfUser = 'name' // может быть либо age либо name
const keyB: KeysOfUser = 'd' // ошибка

/* Когда полезно
  Типизация: функция с двумя generic, где T - сам объект, а К - ключ, из ключей этого объекта (Т)
*/
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const user: IUser = {
  name: 'Vasya',
  age: 30
}

const userName = getValue(user, 'name')





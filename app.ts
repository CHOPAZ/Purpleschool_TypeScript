/* Interfaces - альтернативная записть объекта
*/

interface User {
  name: string,
  age:number,
  skills: string[]
}

let user: User = {
  name: 'asd',
  age: 25,
  skills: ['1', '2']
}

/*  */

interface User2 {
  name: string,
  age:number,
  skills: string[]
}

interface UserWithRole extends User2 {
  roleId: number
}

let user2: UserWithRole = {
  name: 'asd',
  age: 25,
  skills: ['1', '2'],
  roleId: 1
}

/*  */
interface User3 {
  name: string,
  age:number,
  skills: string[]
}

interface Role3 {
  roleId: number
}

interface UserWithRole3 extends User3, Role3 {
  createdAt: Date
}

let user3: UserWithRole3 = {
  name: 'asd',
  age: 25,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date()
}

/* Объекты могут содержать функции */
interface User4 {
  name: string,
  age:number,
  skills: string[],
  log: (id: number) => string
}

interface Role4 {
  roleId: number
}

interface UserWithRole4 extends User4, Role4 {
  createdAt: Date
}

let user4: UserWithRole4 = {
  name: 'asd',
  age: 25,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date(),
  log(id) {
    return ''
  }
}


/* Индексные свойства

Например:

{
  1: user,
  2: user2
}
*/
/* У интерфейся может быть неограниченное число свойства, где ключом является число, а значвением является пользователь */
interface UserDic {
  [index: number]: User
}

type UserDic2 ={
  [index: number]: User
}

/* Record */

type ud = Record<number, User>
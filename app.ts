/* Type Aliases - упрощение, которое позволяет записывать типы более эффективно
*/

type httpMethod = 'post' | 'get';
type coolString = string;

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
  return -1
}


/*  */
let user: {
  name: string,
  age:number,
  skills: string[]
} = {
  name: 'asd',
  age: 25,
  skills: [
    '1',
    '2'
  ]
}

/* Вынесем в type aliase */

type User2 = {
  name: string,
  age:number,
  skills: string[]
}

let user2: User2 = {
  name: 'asd',
  age: 25,
  skills: [
    '1',
    '2'
  ]
}

/* intersection type. Удобно использовать когда есть несколько типов объектов, и их объеденить в один большой */

type Role = {
  id: number
}

type User3 = {
  name: string,
  age:number,
  skills: string[]
}

type UserWithRole = User3 & Role //intersection

let user3: UserWithRole = {
  name: 'asd',
  age: 25,
  skills: ['1', '2'],
  id: 1
}

/* Если есть пересечения типво */
type Role2 = {
  id: number,
  name: string,
}

type User4 = {
  name: string,
  age:number,
  skills: string[]
}

type UserWithRole2 = {
  user: User4,
  role: Role2

}

let User4: UserWithRole2 = {
  user: {
    name: 'asd',
    age: 25,
    skills: ['1', '2'],
  },
  role: {
    id: 1,
    name: 'dev'
  }
}
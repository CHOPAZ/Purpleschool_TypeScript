/*  
  Conditional Types
*/

const a1: number = Math.random() > 0.5 ? 1 : 0;

/* похожая запись, но с типами */
/* Основной принцип - динамическая подстановка типов взависимости от T */
interface HTTPResponce<T extends 'success' | 'failed'> {
  code: number;
  data: T extends 'success' ? string : Error;
}

const suc: HTTPResponce<'success'> = {
  code: 200,
  data: 'done'
}

const err: HTTPResponce<'failed'> = {
  code: 200,
  data: new Error()
}


/* Кейсы - использование для упрощения перегрузки */

class User {
  id: number;
  name: string;
}

class UserPersisted extends User{ 
  dbId: string;
}

/* Для удобства вызова используем перегрузку */
function getUser(id:  number): User
function getUser(idbIdd:  string): UserPersisted
function getUser(dbIdOrId:  string | number): User | UserPersisted {
  if (typeof dbIdOrId === 'number') {
    return new User()
  } else {
    return new UserPersisted()
  }
}



type UserOrUserPersisted<T extends string | number> = T extends number ? User : UserPersisted; 
function getUser2<T extends string | number>(id: T): UserOrUserPersisted<T> {
  if (typeof id === 'number') {
    return new User() as UserOrUserPersisted<T>;
  } else {
    return new UserPersisted() as UserOrUserPersisted<T>;
  }
}

const res = getUser2(1); //const res: User
const res2 = getUser2('asd'); //const res2: UserPersisted
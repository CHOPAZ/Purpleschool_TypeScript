/* Optional */


/* Если какой то параметр является необязательный то исп. ? */
interface User {
  login: string;
  password?: string;
  // password: string | undefined - не эквивалентно ?
}

type User2 = {
  login: string;
  password?: string;
}

const user: User = {
  login: 'asd@asd.ru',
}


/* Использование опциональный тип в функциях
  в функицях number | undefined - эквивалентно ?
*/

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first
  }
  return first * second
}

/* Использование опциональный тип в объекте */
interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary'
  };
}

function testPass(user: UserPro) {
  const type = user.password?.type
  const type2 = user.password ? user.password.type : undefined
  const type3 = user.password!.type // - 100% пароль будет не undefined
}

function test(param?: string) {
  const t = param ?? multiply(5)
}


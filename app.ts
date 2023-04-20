/* Type Guard - Функция
*/

function logId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id); //string
  } else if(typeof id === 'number') {
    console.log(id); //number
  }
  id //string | number - Флоу типов
}

/* как пишутся type guard */
function logId2(id: string | number) {
  if (isString(id)) {
    console.log(id); //string
  } else {
    console.log(id); //number
  }
}

function isString(x: string | number ): x is string { // запись показывает что x прошел проверку и будет строкой из двух типов string | number. Функция вернет boolean тип
  return typeof x === 'string'
}

/*  */
interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: 'Pavel',
  email: 'q@q.ru',
  login: 'pasha'
}

interface Admin {
  name: string;
  role: number;
}

function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user
}

function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
  if(isAdmin(user)) {
    user.role = 0
  } else {
    throw new Error('Пользователь не админ')
  }
}

/* такие проверки не могут быть асинхронными */

/*  
  index Access Types
*/

interface Role {
  name: string;
}

interface User {
  name: string;
  roles: Role[];
}

const user: User = {
  name: 'Vasya',
  roles: []
}

const nameUser = user['name']


/* как работает с точки зрения типов  */

type rolesType = User['roles'];
/* P.s не путать  User['roles'] - работа с типами, user['name'] - работа не с типами, т.к если захотим сделать константку */
const roleNames = 'roles';
type rolesType2 = User[roleNames]; //будет не валидно, т.к const roleNames = 'roles' - работа с объектами, а type roleType = User['roles'] - работа с типами

/* но мы можем конвертнуть и использовать с точки зрения конвертации типов */
type rolesType3 = User[typeof roleNames]; //работать будет, потому что roleNames - константа - принимает стринг летеральный тип, а не стринг, если переименовать на let, то работать не будет

type roleType = User['roles'][number]; //специальный тип, который можем положить в индексное обращение, сказав что хотим получить элемент массива. Т.е когда из массива необходимо вытащить тип, фактически как в объекте user['name'][0], User['roles'][number] - обобщенно обращаемся ко всем элементам объекта, получая от туда тип

/* фича */

const roles = ['admin', 'user', 'super-user'];
/* создать тип, который является union типом между всеми элементами массива */
const roles2 = ['admin', 'user', 'super-user'] as const; // const roles2: readonly ["admin", "user", "super-user"]
type roleTypes = typeof roles2[number]; // type roleTypes = "admin" | "user" | "super-user"


/* можно использовать вложения */

interface Permission {
  endDate: Date; 
}
interface User2 {
  name: string;
  roles: Role[];
  permission: Permission
}

const user2: User2 = {
  name: 'Vasya',
  roles: [],
  permission: {
    endDate: new Date()
  }
}

type dateType = User2['permission']['endDate']
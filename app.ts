/* Assert - функция, в которой если не ывполняется условие, кидает ошибку
*/

interface User {
  name: string;
}

const a = {};

function assertUser(obj: unknown): asserts obj is User {
  if (typeof obj === 'object' && !!obj && 'name' in obj) { // !!obj - проверка на null    
    return
  } 
   throw new Error('Не пользователь')
}

assertUser(a)
a.name = 'Вася'

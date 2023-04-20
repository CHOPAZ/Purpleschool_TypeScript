/* null - 
Особенности его работы в stric режиме
*/

const nl: null = null;
const n2: null = unknown // нельзя присвоить
const n3: null = undefined // нельзя присвоить


const num1: number = null; // в js можно положить null в переменную, в ts за это отвечает strictNullCheck
const num2: string = null;
const num3: boolean = null;
const num4: undefined = null;

/* Перейдя в tsconfig - strictNullChecks - false
  Ошибка уйдет
*/

/* Какие последствия могут быть
  Ошибки не будет, и код коговир что getUser вернет всегда имя, но это не так, в 50% случаях вернется undefined
  strictNullCheck, если его включить, то мы увидем что будет const user4: User | undefined и будет ошибка
*/
interface User {
  name: string
}

function getUser() {
  if (Math.random() > 0.5) {
    return null
  } else {
    return {
      name: 'Vasya'
    } as User
  }
}

const user4 = getUser();
const name2 = user4.name


/* Отличия undefined и null:
  null - явно заданный неопределенный объект
  undefined - не заданный объект

  Если осознанно нужно вернуть что этого объекта нет, использовать null


*/

if (user4) {
  const name2 = user4.name
} 
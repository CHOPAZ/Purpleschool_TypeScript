/* Literal types
*/


function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
  return -1
}

fetchWithAuth('s', 'post'); //корректно
// fetchWithAuth('s', 'asd'); // некоректно

/* String literal активно используются как на фронте так и на бэк, например для задания пропса */

const a = 'asd'; // тип не string, a 'asd;
let b = 'asd'; // тип string
let c: 'asd' = 'asd'; //тип 'asd
let d = 1; //тип number
const e = 1; //тип 1 

let method = 'post'; //метод string
// fetchWithAuth('s', method); //будет ошибка, т.к идет проверка ттипов и method тип string

/* Чо бы это исправить можно кастонуть к определенному типу */
fetchWithAuth('s', method as 'post')
/* но если в переменной method будет что то другое то типизацция не сломается  */
/* never - никогда такого не произойдет.


*/

/* Первый кейс */
function genereateError(message: string): never { // никогда не возвращает и нужно писать never, не воид
  throw new Error(message)
}

/* Второй кейс */
function dumpError():never {
  while(true) {/* .... */} // цикл который никогда не выйдет
}

/* Рекурсия */
function rec(): never { // без типизация тип функции any
  return rec();
}

/* Третий кейс 

Если добавится параметр на пример 'rejected', то в кейсе он не сработается и отработает default (run time ошибка).
А суть ts - уменьшение ошибок в run time и перевод их на compail time

*/

type paymentAction = 'refund' | 'checkout';

function processAction(action: paymentAction) {
  switch(action) {
    case 'refund':
      //....
      break;
    case 'checkout':
      //....
      break;
    default:
      throw new Error('нет такого action')
  }
}

/* Исправление при помощи never 

Теперь, когда появится новый параметр 'reject', ts будет ругаться, и нужно будет добавить новый кейс для 'reject'
*/

type paymentAction2 = 'refund' | 'checkout' | 'reject';

function processAction2(action: paymentAction2) {
  switch(action) {
    case 'refund':
      //....
      break;
    case 'checkout':
      //....
      break;
    default:
      const _: never = action // const _ - исключает проверку тс на неиспользуемую константьу
      throw new Error('нет такого action')
  }
}

/* Исчерпывающая проверка */

/* Будет ошибка, потому что в функции скрыт возврат undefined */
function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true
  } else if(typeof x === 'number') {
    return false
  }
}

/* Исправление
Ошибка уйдет, потому что вызвав функцию genereateError2('asdasf') вы больше никуда не пойдем, т.к она выкидывает ошибку
*/

function genereateError2(message: string): never { // никогда не возвращает и нужно писать never, не воид
  throw new Error(message)
}

function isString2(x: string | number): boolean {
  if (typeof x === 'string') {
    return true
  } else if(typeof x === 'number') {
    return false
  }
  genereateError2('asdasf')
}

/* never - помогает, ограничить какие-то ветки, какие-то случаи, когда явно необходимо проходить проверку по типам и необходимо какую-то ветку блокировать нсовсем если мы не хотим туда никогда попасть */
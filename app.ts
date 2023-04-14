/* Enums
*/


/* Числовые enum */
/* 
Если  навести на SUCCESS, IN_PROCESS, FAILED
  SUCCESS,  //0
  IN_PROCESS, // 1
  FAILED // 2


  Можно переопределить их
*/
enum statusCode {
  SUCCESS = 1,
  IN_PROCESS = 3,
  FAILED = 10
}
const res = { 
  message: 'Платеж успешен',
  statusCode: statusCode.SUCCESS
}

/* Строковый enum */
enum statusCode2 {
  SUCCESS = 's',
  IN_PROCESS = 'p',
  FAILED = 'f'
}
const res2 = { 
  message: 'Платеж успешен',
  statusCode: statusCode2.SUCCESS
}

/* Гетерогинные enum - встречается редко*/
enum statusCode3 {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 'f'
}
const res3 = { 
  message: 'Платеж успешен',
  statusCode: statusCode3.SUCCESS
}


/* Но */

function action(status: statusCode3) {

}
action(statusCode3.SUCCESS) //SUCCESS - 1
action(1) //SUCCESS - 1
// action('p') // проблема, хотя   IN_PROCESS = 'p', потому что enum числовой

/* Кейсы enum
Например:
1. справочник кодов ответов,
2. справочник величин,
3. справочник направления движения (левоЮ, право, вверх, вниз).
4. роли и т.д.
*/


/* enum могут быть расчетные */

function compute() {
  return 3
}
enum Roles {
  ADMIN = 1 * 2,
  USER = compute()
}

const enum Roles2 {
  ADMIN = 1,
  USER = 2
}

const res4 = Roles2.ADMIN
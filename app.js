"use strict";
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
var statusCode;
(function (statusCode) {
    statusCode[statusCode["SUCCESS"] = 1] = "SUCCESS";
    statusCode[statusCode["IN_PROCESS"] = 3] = "IN_PROCESS";
    statusCode[statusCode["FAILED"] = 10] = "FAILED";
})(statusCode || (statusCode = {}));
const res = {
    message: 'Платеж успешен',
    statusCode: statusCode.SUCCESS
};
/* Строковый enum */
var statusCode2;
(function (statusCode2) {
    statusCode2["SUCCESS"] = "s";
    statusCode2["IN_PROCESS"] = "p";
    statusCode2["FAILED"] = "f";
})(statusCode2 || (statusCode2 = {}));
const res2 = {
    message: 'Платеж успешен',
    statusCode: statusCode2.SUCCESS
};
/* Гетерогинные enum - встречается редко*/
var statusCode3;
(function (statusCode3) {
    statusCode3[statusCode3["SUCCESS"] = 1] = "SUCCESS";
    statusCode3["IN_PROCESS"] = "p";
    statusCode3["FAILED"] = "f";
})(statusCode3 || (statusCode3 = {}));
const res3 = {
    message: 'Платеж успешен',
    statusCode: statusCode3.SUCCESS
};
/* Но */
function action(status) {
}
action(statusCode3.SUCCESS); //SUCCESS - 1
action(1); //SUCCESS - 1
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
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 2] = "ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));

"use strict";
/*
  Typeof -
*/
/*
  Вспомним:
  Typeof для сужения типов, когда есть union type
  typeof - js часть для сужения типов
 */
let strOrNum = 5;
if (Math.random() > 0.5) {
    strOrNum = 5;
}
else {
    strOrNum = 'str';
}
if (typeof strOrNum === 'string') {
    console.log(strOrNum); //string
}
else {
    console.log(strOrNum); //number
}
/* typeof - исключение типов, ts часть */
let str2OrNum; //string | number
const user = {
    name: 'Vasya'
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Dowm"] = 1] = "Dowm";
})(Direction || (Direction = {}));

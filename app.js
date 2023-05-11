"use strict";
/*
  Conditional Types

  Infer - берет и псевдообъявляет переменную типа внутри extends
*/
function runTransaction(transaction) {
    console.log(transaction);
}
const transaction = {
    fromTo: ['1', '2']
};
runTransaction(transaction);
/* Решение проблемы
  T extends (first: infer First, - из first вытаскивает тип First
*/
const transaction2 = {
    fromTo: ['1', '2']
};

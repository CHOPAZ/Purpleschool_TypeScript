"use strict";
/*
  Модульность и библиотеки

  Namespaces и reference
*/
var A;
(function (A) {
    A.a = 5;
})(A || (A = {}));
A.a;
/* reference - сборка в один файл. Для этого в tsconfig - изменить "module": 'AMD и "outFile": "./app.js" */ 

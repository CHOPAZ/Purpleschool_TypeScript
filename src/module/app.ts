/*  
  Модульность и библиотеки

  Namespaces и reference

  Namespaces = module
*/

namespace A { // - обертка, позволяющая инкапсулировать в себя некую логику
  export const a = 5;

  export interface B {
    c: number;
  }
}

A.a;

/* reference - сборка в один файл. Для этого в tsconfig - изменить "module": 'AMD и "outFile": "./app.js" */
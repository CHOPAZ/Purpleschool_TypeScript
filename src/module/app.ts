/*  
  Компилятор TS

  Strict режим (раздел type checking)
*/

/* noImplicitAny */

function noImplicitAny(a) { //ошибки нет, т.к noImplicitAny: false. Если будет true, То нужно явно указать a: any

}

/* strictNullChecks */

function strictNullChecks(a: number): number { //ошибок нет (т.к strictNullChecks: false), но они они есть, потому что фунция вовзращает не number, a number и  неявное return undefined, поэтому необходимо включить strictNullChecks: true
  if (a > 0) {
    return a;
  }
}
/* правильно */
function strictNullChecks2(a: number): number | undefined {
  if (a > 0) {
    return a;
  }
}

/* strictFunctionTypes */

/* Если strictFunctionTypes: false - то ошибки не будет, если true, то ошибка тип функции не соответствует типу функции которые ему несоответсвует
Type '(a: number) => number' is not assignable to type 'strOrNumFunc'.
  Types of parameters 'a' and 'a' are incompatible.
    Type 'string | number' is not assignable to type 'number'.
      Type 'string' is not assignable to type 'number'.
*/

type strOrNumFunc = (a: number | string) => number

function strictFunctionTypes(a: number): number {
  return a;
}

let f: strOrNumFunc = strictFunctionTypes;
f('sdf')

/* strictBindCallApply */

strictFunctionTypes.apply(undefined, [1, 3]) // strictBindCallApply: true - проверяет на колличество переданных аргументов

/* strictPropertyInitialization - позволяет свойства объявляет как интерфейс, если true, то будет ошибка b' has no initializer and is not definitely assigned in the constructor.  */

class A {
  b: number;
}


/* noImplicitThis - позволяет ts проверить к чему относится this */
class B {
  b: number;

  test() {
    return function() {
      this.b = 5 //'this' implicitly has type 'any' because it does not have a type annotation. Если переделать на стрелочную функцию то this = B
    }
  }
}

/* useUnknownInCatchVariables - если false, то error: any, если true - то error: unknonw */

try {
  
} catch (error) {
  console.log(error);
}

/* alwaysStrict - стриктр js, когда true - всегда включать strict mode для js файла */
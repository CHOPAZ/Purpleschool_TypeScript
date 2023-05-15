/*  
  Служебные типы

  Partial,
  Required, -   все эти типы содержат под капотом Mapped Types, если провалиться внутрь описания то увидем следующееЭ
  Readonly

  Partial -  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  Required - type Required<T> = {
    [P in keyof T]-?: T[P];
  };

  Readonly - type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
*/

interface User {
  name: string;
  age?: number;
  email: string;
}
/* Partial - используется не так часто, необходимость его следетелствует о необходимости  отдельного типа, либо нет необходимости что то типизировать и выкинуть часть савойст */
/* использовать User как interface, но сделать поля не обязательными */
type partial = Partial<User>; /* 
  type p = {
    name?: string | undefined;
    age?: number | undefined;
    email?: string | undefined;
}
*/
const p: partial = {}


/* Required - делает поля обязательными */
type required = Required<User>; /* 
  type required = {
    name: string;
    age: number; - age стал обязательным
    email: string;
}
*/

/* Readonly -  */
type readonly = Readonly<User>; /* 
  type readonly = {
    readonly name: string;
    readonly age?: number | undefined;
    readonly email: string;
}
*/
type requiredAndReadonly = Required<Readonly<User>>; /* 
  type requiredAndReadonly = {
    readonly name: string;
    readonly age: number;
    readonly email: string;
}
*/

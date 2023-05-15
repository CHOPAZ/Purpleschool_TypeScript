"use strict";
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
const p = {};

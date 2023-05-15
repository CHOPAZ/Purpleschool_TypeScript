"use strict";
/*
  Служебные типы

  ReturnType, Parameters, ConstructorParameters
*/
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function getData(id) {
    return new User(id, 'Vasya');
}

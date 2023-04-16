"use strict";
/* Interfaces - альтернативная записть объекта
*/
let user = {
    name: 'asd',
    age: 25,
    skills: ['1', '2']
};
let user2 = {
    name: 'asd',
    age: 25,
    skills: ['1', '2'],
    roleId: 1
};
let user3 = {
    name: 'asd',
    age: 25,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date()
};
let user4 = {
    name: 'asd',
    age: 25,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log(id) {
        return '';
    }
};

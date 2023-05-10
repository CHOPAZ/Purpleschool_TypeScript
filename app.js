"use strict";
/*
  index Access Types
*/
const user = {
    name: 'Vasya',
    roles: []
};
const nameUser = user['name'];
/* P.s не путать  User['roles'] - работа с типами, user['name'] - работа не с типами, т.к если захотим сделать константку */
const roleNames = 'roles';
/* фича */
const roles = ['admin', 'user', 'super-user'];
/* создать тип, который является union типом между всеми элементами массива */
const roles2 = ['admin', 'user', 'super-user']; // const roles2: readonly ["admin", "user", "super-user"]
const user2 = {
    name: 'Vasya',
    roles: [],
    permission: {
        endDate: new Date()
    }
};

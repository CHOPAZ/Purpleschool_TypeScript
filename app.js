"use strict";
/*
  Conditional Types
*/
const a1 = Math.random() > 0.5 ? 1 : 0;
const suc = {
    code: 200,
    data: 'done'
};
const err = {
    code: 200,
    data: new Error()
};
/* Кейсы - использование для упрощения перегрузки */
class User {
}
class UserPersisted extends User {
}
function getUser(dbIdOrId) {
    if (typeof dbIdOrId === 'number') {
        return new User();
    }
    else {
        return new UserPersisted();
    }
}
function getUser2(id) {
    if (typeof id === 'number') {
        return new User();
    }
    else {
        return new UserPersisted();
    }
}
const res = getUser2(1); //const res: User
const res2 = getUser2('asd'); //const res2: UserPersisted

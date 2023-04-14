"use strict";
/* Объекты

*/
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Pavel',
    surname: 'Kvasnickiy',
    city: 'Surgut',
    age: 25,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName(user));

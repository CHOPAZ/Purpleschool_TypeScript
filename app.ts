/* Объекты

*/

function getFullName(userEntity: {firstname: string, surname: string}): string {
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
}

console.log(getFullName(user));
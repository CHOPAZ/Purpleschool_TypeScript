/* Типы в функциях

any - любой тип

*/

function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

const getFullNameErrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
}

/* Tuples - кортежы
  Массив ограниченной длины, где каждый элемент типизирован
*/


/* Массив содержащий ТОЛЬКО идентификатор и название (1, 'Dev') */
const skill: [number, string] = [1, 'Dev'];
const id = skill[0];
const skillName = skill[1];

/* Но т.к. это массив, то с ним можно делать какие то операции, и ts это никак не запретит. Но обратится к нему мы все равно не сможем */
skill.push('Testing')
// const test = skills[2] // ошибка


/* Диструктуризация */
const skill2: [number, string] = [1, 'Dev'];
const [id2, skillName2] = skill2

/* Типизация массива произвольной длины - редко */
const arr: [number, string, ...boolean[]] = [1, 'Dev', true, false];
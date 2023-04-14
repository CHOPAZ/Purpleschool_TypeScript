"use strict";
/* Массивы */
const skills = ['Dev', 'Devops'];
for (const skill of skills) {
    console.log(skill);
    console.log(skill.toLowerCase());
}
skills.filter(skill => skill !== 'Dev');
/* Если например массив skills2 не типизирован ( пришел извне), то можно внутри типизировать метода
Но мы не можем указать явный тип number, потому что итерация происходит по строкам
*/
const skills2 = ['Dev', 'Devops'];
skills2.filter((skill) => skill !== 'Dev');
/* Неоднородный массив - плохой вариант. Any не использовать */
const skills23 = ['Dev', 'Devops', 1];

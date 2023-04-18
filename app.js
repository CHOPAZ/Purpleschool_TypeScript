"use strict";
/* void - обозначает что эта функция ничего не возвращаетcz */
function logId(id) {
    console.log(id);
}
const a = logId(1); // тип a - void
/*
  Если функция из любой ветки хоть что-то вернула будет number | undefined
  Если функция из любой ветки ничего не возвращает будет void
*/
function multiply(f, s) {
    if (!s) {
        return f * f;
    }
}
const f1 = () => { };
/* Работает, потмоу что возврат будет игнорироваться. Практическое применение, когда хотим сделать например перебор массива */
const f2 = () => {
    return true;
};
const b = f2(); //void
const skills = ['Dev', 'DevOps'];
const user = {
    skills: ['']
};
skills.forEach((e) => user.skills.push(e));
/* Благодаря void, мы получаем совместимость использования forEach, который ожидает в результате void и push, в результате который ожидает какое-то число

  Ключевое различие между void и undefined, если функция ничего не возвращает она может быть void или undefined, но когда мы типизируем функцию и хотим игнорировать возврат мы типищзируем как возврат void
*/ 

/*  
  Модульность и библиотеки

  Типизация сторонних библиотек
*/


/* типизация без поддержуи ts 

  будет ошибка, не сможет найти 'really-relaxed-json', как решение использновать перед импортом // @ts-ignore
*/


import {toJson} from 'really-relaxed-json';

const rjson = '[ one two three {foo:bar} ]'
const json = toJson(rjson)

console.log(json);
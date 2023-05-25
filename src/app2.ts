import {a} from './module/app.js'
import run from './module/app.js'; // вместо run можно назвать как угодно. Это импорт только  default
import * as all from './module/app.js' // импорт всего, и default тоже
import {Test as CL} from './module/app.js'; // переименнование класса Test в CL
// import { MyType } from './module/app.js'; // импорт типа

/* специализированный синтаксис только для ts */
// import type { MyType } from './module/app.js';
import {type  MyType } from './module/app.js'; //с версии ts 4...


new CL()
run()
console.log(a);


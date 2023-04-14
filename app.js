"use strict";
/* Readonly
*/
/* Проблема: несмотря на то что skill константа, мы можем переопределить его элементы */
const skill = [1, 'Dev'];
/* Readonly - кортеж, который нельзя изменить */
const skill2 = [1, 'Dev'];
const skill3 = ['Dev, DevOps'];
/* Альтернативная запись для массивов - Джинерик.
вместо string[] - Array<string>
*/
const skill4 = ['Dev, DevOps'];
/* Альтернативная запись для Readonly - Дженерик */
const skill5 = ['Dev, DevOps'];

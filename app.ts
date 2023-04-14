/* Readonly
*/


/* Проблема: несмотря на то что skill константа, мы можем переопределить его элементы */
const skill: [number, string] = [1, 'Dev'];

/* Readonly - кортеж, который нельзя изменить */
const skill2: readonly[number, string] = [1, 'Dev'];

const skill3: readonly string[] = ['Dev, DevOps'];

/* Альтернативная запись для массивов - Джинерик.
вместо string[] - Array<string>
*/
const skill4: Array<string> = ['Dev, DevOps'];

/* Альтернативная запись для Readonly - Дженерик */
const skill5: ReadonlyArray<string> = ['Dev, DevOps'];
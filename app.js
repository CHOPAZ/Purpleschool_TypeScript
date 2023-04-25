"use strict";
/* Статические свойства
  Статичные классы не могут быть, из-за того что JS не ограничен только классами. Поэтому можно статичным задать не класс, а какие-то свойства или методы класса
*/
class UserService {
    constructor(id) {
    }
    static getDB(id) {
        // return this.db.findById(id);
        /* Правильная запись */
        return UserService.db.findById(id);
    }
    create() {
        UserService.db;
    }
}
/* некий инициализатор статичного класса. Асинхронные действия нельзя делать */
(() => {
    /* пример */
    UserService.db = 'afsa';
})();
/* Для того что бы обратится к свойству db, не требуется создавать инстанс */
UserService.db;
UserService.getDB(2);
// UserService.create() - не сможем получить
const inst = new UserService(1);
inst.create(); // можем получить доступ

"use strict";
/* Особенности наследования
*/
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
    pay2() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // например сохраняет в базу
    }
    /* переопределение методов. Override методов */
    /* Будет ошибка, потому что в методе Payment нет аргумента date, что бы исправить необходимо поставить date? */
    pay(date) {
        // this.status = 'paid'; - если в методе Payment изменится логика, то ее нужно переносить сюда, поэтому нужно заменить строчку на super.pay()
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
    /* В новом обновлении TS появился новый модификатор override - который показывает что переопределили метод */
    pay2(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
// new PersistedPayment().pay() //метод из класса Payment
new PersistedPayment().save(); // метод из класса PersistedPayment
/* Порядок вызова конструктора и свойств */
/* 1. Инициализируется свойство name: string = 'User' класса User
   2. Вызывается конструктор User
   3. Инициализируется свойство  name: string = 'Admin' класса Admin
   4. Вызывается конструктор Admin
*/
class User {
    constructor() {
        this.name = 'User';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super(); // супер всегда, должен быть перед какимито действиями, заисключением крайних случаев например как на строчке 27-28
        this.name = 'Admin';
        console.log(this.name);
    }
}
new Admin(); // в консоль выведится User и Admin
/*  */
class HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}

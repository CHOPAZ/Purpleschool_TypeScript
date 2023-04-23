"use strict";
/* Extends - наследование
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

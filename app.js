"use strict";
/*  Работа с this
*/
class Payment {
    constructor() {
        this.date = new Date();
    }
    getDate() {
        return this.date;
    }
}
const p = new Payment();
const user = {
    id: 1,
    paymentDate: p.getDate.bind(p)
};
console.log(p.getDate());
console.log(user.paymentDate());
/* Как указать ts что  в данном случае будет ошибка, т.е если не забаиндить this, то будет undefinde */
class Payment2 {
    constructor() {
        this.date = new Date();
    }
    getDate() {
        return this.date;
    }
}
const p2 = new Payment2();
const user2 = {
    id: 1,
    paymentDate: p2.getDate.bind(p2)
};
console.log(p2.getDate());
console.log(user2.paymentDate());
/* Одна из возможностей не терять контекст использовать стрелочные функции */
class Payment3 {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p3 = new Payment3();
const user3 = {
    id: 1,
    paymentDate: p3.getDate.bind(p3),
    paymentDateArrow: p3.getDateArrow
};
console.log(user3.paymentDateArrow());
/* Случаи когда стрелочная функция ен будет работать */
class PaymentPersistent extends Payment3 {
    save() {
        return super.getDateArrow();
    }
}
console.log(new PaymentPersistent().save()); // .getDateArrow is not a function - потому что в прототипе Payment не будет функции стрелочной, но если заенить на  return this.getDateArrow() - работать будет

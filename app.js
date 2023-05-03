"use strict";
/*
  Mixins - реализуют возможность наследования не только от одного класса, но и от нескольких классов. Либо mixin используются как добавление примисей дополнительных свойст тому или иному объекту без явного наследования


  Кейсы:
  DSI модель, которую можно использовать в рамках тестировани
  Доп наследование от  нескольких элементов, которые мы не можем реализовать в обычном ts
*/
class List {
    constructor(items) {
        this.items = items;
    }
}
/* Mixin - функция,  */
/* Расширим функциона List, добавив ему метод first */
/* простым способом - наследование */
class ExtendsListClass extends List {
    first() {
        return this.items[0];
    }
}
/* через mixin */
function ExtendsListMixin(Base) {
    return class ExtendsListMixin extends Base {
        first() {
            return this.items[0];
        }
    };
}
/* Описание кода выше:
  1. в функцию ExtendsListMixin должны передать какой то класс ( не инстанс класса) - Base: TBase, этот клдасс должен наследовать ListType
  2. возвращаем класс, который наследует переданный класс

*/
const list = ExtendsListMixin(List); // в константе получили сам класс, не его инстанс
const res = new list(['first', 'second']);
console.log(res.first());
class List2 {
    constructor(items) {
        this.items = items;
    }
}
class Accordion2 {
}
function ExtendsListMixin2(Base) {
    return class ExtendsListMixin2 extends Base {
        first() {
            return this.items[0];
        }
    };
}
class AccordionList2 {
    constructor(items) {
        this.items = items;
    }
}
const list2 = ExtendsListMixin(AccordionList2);
const res2 = new list2(['first', 'second']);
console.log(res2.first());
console.log(res2.isOpend);
console.log(res2.items);
/* Мы получили extends фактически от двух классов */

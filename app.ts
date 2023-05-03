/*  
  Mixins - реализуют возможность наследования не только от одного класса, но и от нескольких классов. Либо mixin используются как добавление примисей дополнительных свойст тому или иному объекту без явного наследования


  Кейсы:
  DSI модель, которую можно использовать в рамках тестировани
  Доп наследование от  нескольких элементов, которые мы не можем реализовать в обычном ts
*/

/* Тип constructor */
type Constructor = new (...args: any[]) => {}

/* Уличшить конструктор, сузив его использование при помощи Generic
  T = {} - значение по умолчанию, т.е если не передадим Т, то он по умолчанию является чем угодно
*/
type GConstructor<T = {}> = new (...args: any[]) => T

class List {
  constructor(public items: string[]) {}
}

type ListType = GConstructor<List>

/* Mixin - функция,  */

/* Расширим функциона List, добавив ему метод first */
/* простым способом - наследование */
class ExtendsListClass extends List {
  first() {
    return this.items[0]
  }
}

/* через mixin */
function ExtendsListMixin<TBase extends ListType>(Base: TBase) {
  return class ExtendsListMixin extends Base {
    first() {
      return this.items[0]
    }
  }
}

/* Описание кода выше:
  1. в функцию ExtendsListMixin должны передать какой то класс ( не инстанс класса) - Base: TBase, этот клдасс должен наследовать ListType
  2. возвращаем класс, который наследует переданный класс

*/

const list = ExtendsListMixin(List) // в константе получили сам класс, не его инстанс
const res = new list(['first', 'second']);
console.log(res.first());


/* Когда использовать mixin и в чем его преимущетсва
  1. Позволяет писать еще вариант наследования, когда моджно спокойно примиксовать еще одно свойство к исходному класса
  2. Позволяет делать наследование нескольких классов одновременно
*/

type GConstructor2<T = {}> = new (...args: any[]) => T

class List2 {
  constructor(public items: string[]) {}
}
class Accordion2 {
  isOpend: boolean;

}

type ListType2 = GConstructor2<List2>
type AccordionType2 = GConstructor2<Accordion2>

function ExtendsListMixin2<TBase extends ListType2 & AccordionType2>(Base: TBase) {
  return class ExtendsListMixin2 extends Base {
    first() {
      return this.items[0]
    }
  }
}

class AccordionList2 {
  isOpend: boolean;
  constructor(public items: string[]) {}
}


const list2 = ExtendsListMixin(AccordionList2)
const res2 = new list2(['first', 'second']);
console.log(res2.first());
console.log(res2.isOpend);
console.log(res2.items);

/* Мы получили extends фактически от двух классов */

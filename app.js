"use strict";
/* Implements кдассам интерфейсов. Позволяет абстрагироваться от конкретной реализации
   и предварительно договориться о той форме класса или его свойств, которые необходимы

   Если мы хотим сделать метод асинхронным:

   async error(...args: any[]): Promise<void> {
    // Кинуть во внешнюю системы
    console.log(...args);
  }
*/
class Logger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        // Кинуть во внешнюю системы
        console.log(...args);
    }
}
class User {
    pay(paymentId) {
        //
    }
}
class User2 {
    delete() {
        //
    }
    pay(paymentId) {
        //
    }
}

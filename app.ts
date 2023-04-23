/* Implements кдассам интерфейсов. Позволяет абстрагироваться от конкретной реализации
   и предварительно договориться о той форме класса или его свойств, которые необходимы

   Если мы хотим сделать метод асинхронным:

   async error(...args: any[]): Promise<void> {
    // Кинуть во внешнюю системы
    console.log(...args);
  }
*/


interface ILogger {
  log(...args): void;
  error(...args): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  error(...args: any[]): void {
    // Кинуть во внешнюю системы
    console.log(...args);
  }
  

}

/* Частичная имплементация интерфейса */
interface IPayble {
  pay(paymentId: number): void;
  price?: number;
}

class User implements IPayble {
  pay(paymentId: number | string): void { //number | string - работать будет, если оставить только string не будет работать
    //
  }

}


/*  */

interface IPayble2 {
  pay(paymentId: number): void;
  price?: number;
}

interface IDeletable {
  delete(): void
}

class User2 implements IPayble, IDeletable {
  delete(): void {
    //
  }
  pay(paymentId: number | string): void { 
    //
  }

}


/*  
   Порядок декораторов
*/

/* Универсальный дкеоратор */
function Uni(name: string): any {
  console.log(`Инициализация: ${name}`);
  return function() {
    console.log(`Вызов: ${name}`);
  }
}

@Uni('Класс')
class MyClass {
  @Uni('Свойство')
  props?: any;

  @Uni('Свойство static')
  static props2?: any;

  @Uni('Method')
  method(@Uni('Параметр method')_: any) {

  }

  @Uni('Method static')
  static method2(@Uni('Параметр method static')_: any) {

  }

  constructor(@Uni('Параметр constructor')_: any) {

  }
}

/* 
  Инициализация: Свойство
  Вызов: Свойство
  Инициализация: Method
  Инициализация: Параметр method
  Вызов: Параметр method
  Вызов: Method
  Инициализация: Свойство static
  Вызов: Свойство static
  Инициализация: Method static
  Инициализация: Параметр method static
  Вызов: Параметр method static
  Вызов: Method static
  Инициализация: Класс
  Инициализация: Параметр constructor
  Вызов: Параметр constructor
  Вызов: Класс
*/
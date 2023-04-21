/* Конструктор

Отличие конструктора от методов в классе
1.Конструктор автоматически тригирется, когда используем new - тем самым вызываем конструктор и передаем туда параметр, который указан в конструкторе, после этот параметр присваивается инстансу нашего пользователя который лежит в классе
2. Конструктор всегда должен возвращать этого пользователя (User), неможем переопределить что он возвращает, например constructor(name: string): string. Нельзя типизировать возврат конструктора constructor(name: string): User
3. Generic - не может принимать generic параметр

В отличии от js в ts можно доопределить конструктор и сделать его overload- функцией - то, когда имеет некоторую сигнатуру функции дополняем его альтернативной сигнатуройЖ например ниже

Сигнатуре перезагрузки (overload) и сигнатура реализации:
В TS послендим в списке конструктором, я вляется конструктор реализации(имплементации) - говорит что все что передано в парамектре, должны быть совсестимы с конструктором, которые были переданы до нее

Преимущество втом, что можно описывать совершенно раслычные конструкторы, скрывая логику применения внутри конструктора, т.е можно создать пользователя как с именем так и без
*/

class User {
  name: string
  
  constructor();
  constructor(name: string) //публичный конструктор
  constructor(name?: string) { //конструктор имплементации
    if (typeof name === 'string'){
      this.name = name;
    }
  }
}

const user = new User('Pavel');
const user2 = new User();

class User3 {
  name: string;
  age: number;
  
  constructor();
  constructor(name: string); //публичный конструктор
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(ageOrName?: string | number, age?: number) { //конструктор имплементации
    if (typeof ageOrName === 'string'){
      this.name = ageOrName;
    } else if(typeof ageOrName === 'number') {
      this.age = ageOrName
    }

    if (typeof age === 'number'){
      this.age = age;
    }
  }
}

const user3 = new User3(33);
const user4 = new User3('Vasya' ,33);
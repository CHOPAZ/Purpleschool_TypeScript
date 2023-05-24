/*  
  Компилятор TS

  Проверки кода(раздел type checking)
*/

/* noUnusedLocals - если включить, то defaultUser подствети как warning */
class User {
  name: string;
  constructor(name: string) {
    this.name = name
  }

  /* P.s. альтернативна запись присвоения имени name
    class User {
      constructor(public name: string) {} //- аналогично с private
    }
  */
}

function createUser(user: User) {
  //логика
  const defaultUser = new User('default');
}

/* noUnusedParameters - неиспользуемые параметры, подсветка их в warning */
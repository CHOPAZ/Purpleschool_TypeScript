/*  Типизация this
*/
class UserBilder {
  name: string;

  setName(name: string): this { //this - будет ссылатся на UserBilder
    this.name = name;
    return this
  }

  /* Type Guard */
  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

const res = new UserBilder().setName('Вася');

/* Колиззии.

  Если типизировать функцию как setName(): UserBilder - то this будет ссылаться всегда на UserBilder, и это будет неправильно и res2 будет ссылаться на UserBilder. Поэтому правильно типизировать setName(): this
*/

class AdminBuilder extends UserBilder {
  roles: string[];

}

const res2 = new AdminBuilder().setName('Паша');

/* Type Guard */

let user: UserBilder | AdminBuilder = new UserBilder();
if ( user.isAdmin()) {
  console.log(user); //let user: AdminBuilder
} else {
  console.log(user); //let user: UserBilder
}

/* Замечание
  Если объекты полностью совпадают, они будут одним и тем же.
  Например если не будет в AdminBuilder -  roles: string[], то результат Type Gyarda будет let user: UserBilder | AdminBuilder, и в else будет let user: never
*/
"use strict";
/*  Типизация this
*/
class UserBilder {
    setName(name) {
        this.name = name;
        return this;
    }
    /* Type Guard */
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
const res = new UserBilder().setName('Вася');
/* Колиззии.

  Если типизировать функцию как setName(): UserBilder - то this будет ссылаться всегда на UserBilder, и это будет неправильно и res2 будет ссылаться на UserBilder. Поэтому правильно типизировать setName(): this
*/
class AdminBuilder extends UserBilder {
}
const res2 = new AdminBuilder().setName('Паша');
/* Type Guard */
let user = new UserBilder();
if (user.isAdmin()) {
    console.log(user); //let user: AdminBuilder
}
else {
    console.log(user); //let user: UserBilder
}
/* Замечание
  Если объекты полностью совпадают, они будут одним и тем же.
  Например если не будет в AdminBuilder -  roles: string[], то результат Type Gyarda будет let user: UserBilder | AdminBuilder, и в else будет let user: never
*/ 

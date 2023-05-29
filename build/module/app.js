"use strict";
/*
  Порождающие паттерны:

  Prototype - эксплуатирует возможность прототепирование объектов, которые в последствии будем инстанцеировать
*/
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
        let target = new UserHistory(this.email, this.name);
        return target;
    }
}
let user = new UserHistory('a@a.ru', 'Pavel');
console.log(user);
let user2 = user.clone();
console.log(user2);
/*
  UserHistory {
  email: 'a@a.ru',
  name: 'Pavel',
  createdAt: 2023-05-29T16:09:11.064Z
}
UserHistory {
  email: 'a@a.ru',
  name: 'Pavel',
  createdAt: 2023-05-29T16:09:11.073Z
}
*/
user2.email = 'b@b.ru';
console.log(user);
console.log(user2);

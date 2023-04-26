"use strict";
/*  Абстрактные классы и методы
*/
class Controller {
}
/* ts скажет что в классе  UserController необходимо реализовать метод handle */
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
// new Controller() - так сджелать нельзя, потому что это абстрактный класс, можно только его наследовать
new UserController();
/* Преимущества
  1. В абстрактном классе могут быть необязательно абстрактные методы
  2. В нутри метода можно вызывать абстрактные методы
*/
class Controller2 {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('End');
    }
}
class UserController2 extends Controller2 {
    handle(req) {
        console.log(req);
    }
}
const c = new UserController2();
c.handleWithLogs('req');

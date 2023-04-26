/*  Абстрактные классы и методы
*/

abstract class Controller {
  abstract handle(req: any): void
}


/* ts скажет что в классе  UserController необходимо реализовать метод handle */
class UserController extends Controller {
  handle(req: any): void {
    console.log(req);
  }
}

// new Controller() - так сджелать нельзя, потому что это абстрактный класс, можно только его наследовать
new UserController();

/* Преимущества
  1. В абстрактном классе могут быть необязательно абстрактные методы
  2. В нутри метода можно вызывать абстрактные методы
*/

abstract class Controller2 {
  abstract handle(req: any): void;

  handleWithLogs(req: any) {
    console.log('start');
    this.handle(req)
    console.log('End');
  }
}

class UserController2 extends Controller2 {
  handle(req: any): void {
    console.log(req);
  }
}

const c = new UserController2();
c.handleWithLogs('req')
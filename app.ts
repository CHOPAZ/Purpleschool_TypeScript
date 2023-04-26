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

/* Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение
*/

abstract class Logger {
  abstract log(message: string): void;

  printDate(date: Date) {
    this.log(date.toString());
  }
}

class Datelogger extends Logger {
  log(message: string): void {
    console.log(message);
  }
  
  logWithDate(message: any) {
    this.printDate(new Date());
    this.log(message)
  }
}

const data = new Datelogger();
data.logWithDate('asfsaf')
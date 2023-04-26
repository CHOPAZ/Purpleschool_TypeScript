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
/* Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение
*/
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class Datelogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const data = new Datelogger();
data.logWithDate('asfsaf');

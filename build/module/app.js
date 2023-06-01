"use strict";
/*
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  1. Chain of Command / Цепочка вызово - практически в любой API, где есть обработчики. Задача Chain of Command построить такую цепоку,
    которая бы отрабатывала входящий запрос-например, и передавала бы это друг за другом

*/
class AbstractMiddleWare {
    next(mid) {
        this.nextMiddleWare = mid;
        return mid;
    }
    handle(request) {
        if (this.nextMiddleWare) {
            return this.nextMiddleWare.handle(request);
        }
        return;
    }
}
/* Авторизация */
class AuthMiddleWare extends AbstractMiddleWare {
    handle(request) {
        console.log('AuthMiddleWare');
        if (request.userId === 1) {
            return super.handle(request); // super.handle(request) вызывает метод handle() из абстрактного класса AbstractMiddleWare
        }
        return { error: 'Вы не авторизованы' };
    }
}
/* Валидация */
class ValidateMiddleWare extends AbstractMiddleWare {
    handle(request) {
        console.log('ValidateMiddleWare');
        if (request.body) {
            return super.handle(request);
        }
        return { error: 'Нет тела данных' };
    }
}
/*  */
class Controller extends AbstractMiddleWare {
    handle(request) {
        console.log('Controller');
        return { success: request };
    }
}
const controller = new Controller();
const validate = new ValidateMiddleWare();
const auth = new AuthMiddleWare();
/* Цепочка вызово */
auth.next(validate).next(controller);
/*
  AuthMiddleWare
  { error: 'Вы не авторизованы' }
*/
console.log(auth.handle({
    userId: 3
}));
/*
  AuthMiddleWare
  ValidateMiddleWare
  { error: 'Нет тела данных' }
*/
console.log(auth.handle({
    userId: 1
}));
/*

*/
console.log(auth.handle({
    userId: 1,
    body: 'I am ok'
}));

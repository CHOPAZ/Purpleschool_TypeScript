"use strict";
/*
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  2. Mediator (посредник) - используется на фронтенде для связывания компонентов, которые разрознены и не знают друг о друге
*/
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log('Отправляю уведомление');
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHamdler', 'myEvent');
    }
}
class NotificationsMediator {
    constructor(notifications, logger, handler) {
        this.notifications = notifications;
        this.logger = logger;
        this.handler = handler;
    }
    notify(_, event) {
        switch (event) {
            case 'myEvent':
                this.notifications.send();
                this.logger.log('Отправлено');
                break;
        }
    }
}
const handler = new EventHandler();
const logger = new Log();
const notifications = new Notifications();
const mediator = new NotificationsMediator(notifications, logger, handler);
handler.setMediator(mediator);
handler.myEvent();

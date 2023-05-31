"use strict";
/*
  Структурные паттерны:

  Bridge (Мост)
*/
class TelegrammProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnect TG');
    }
}
class WhatsUpProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnect WhatsUp');
    }
}
/* Глобальный объект, который будет работать с провайдерами */
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}
/* Реализация отложенного уведомления через наследование */
class DelayNotificationSender extends NotificationSender {
    constructor(provider) {
        super(provider);
    }
    sendDelayed() {
        //
    }
}
const sender = new NotificationSender(new TelegrammProvider());
sender.send();
const sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send();

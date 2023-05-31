"use strict";
/*
  Структурные паттерны:

  Facade (Фасад) - скрытие реализации
*/
class Notify {
    send(template, to) {
        console.log(`отправляю ${template}: ${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templatesList = [
            { name: 'other', template: '<h1>Шаблон</h1>' }
        ];
    }
    getByName(name) {
        return this.templatesList.find(t => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.template = new Template();
        this.logger = new Log();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log('Не найден шаблон');
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log('Шаблон отправлен');
    }
}
const s = new NotificationFacade();
s.send('a@a.ru', 'other');

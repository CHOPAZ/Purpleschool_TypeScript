"use strict";
/*
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  8. Observer (Наблюдатель)
*/
/* пришел с сайта */
class Lead {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
/* rjulf ghb[jlbn yjdsq ] */
class NewLead {
    constructor() {
        /* те кто подписался */
        this.observers = [];
    }
    attach(observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
/* подписчики */
class NotificationService {
    update(subject) {
        console.log(`NotificationService получил уведомление`);
        console.log(subject);
    }
}
class LeadService {
    update(subject) {
        console.log(`LeadService получил уведомление`);
        console.log(subject);
    }
}
const subject = new NewLead();
subject.state = new Lead('Паша', '456464');
const s1 = new NotificationService();
const s2 = new LeadService();
/* подписка */
subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();

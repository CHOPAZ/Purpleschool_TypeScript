/*  
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  8. Observer (Наблюдатель)
*/

interface IObserver {
  update(subject: Subject): void;
}

interface Subject {
  attach(observer: IObserver): void //подписаться на событие
  detach(observer: IObserver): void //отписка от событие
  notify(): void //отправить событие
}

/* пришел с сайта */
class Lead {
  constructor(public name: string, public phone: string) {}
}

/* rjulf ghb[jlbn yjdsq ] */
class NewLead implements Subject {
  /* те кто подписался */
  private observers: IObserver[] =[];
  /* полезная информация */
  public state: Lead;

  attach(observer: IObserver): void {
    if (this.observers.includes(observer)) {
      return
    }
    this.observers.push(observer)
  }
  detach(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if(observerIndex === -1) {
      return
    }
    this.observers.splice(observerIndex, 1)
  }
  notify(): void {
    for (const observer of this.observers) {
      observer.update(this)
    }
  }

}

/* подписчики */
class NotificationService implements IObserver {
  update(subject: Subject): void {
    console.log(`NotificationService получил уведомление`);
    console.log(subject);
  }
}

class LeadService implements IObserver {
  update(subject: Subject): void {
    console.log(`LeadService получил уведомление`);
    console.log(subject);
  }
}

const subject = new NewLead();
subject.state = new Lead('Паша', '456464');

const s1 = new NotificationService()
const s2 = new LeadService()

/* подписка */
subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();
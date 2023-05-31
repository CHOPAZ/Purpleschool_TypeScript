/*  
  Структурные паттерны:

  Bridge (Мост)
*/

/* Интерфейс провайдера (telegram и whatsUp) */
interface IProvider {
  sendMessage(message: string): void;
  connect(config: unknown): void;
  disconnect(): void;
}

class TelegrammProvider implements IProvider{
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log('Disconnect TG');
  }

}
class WhatsUpProvider implements IProvider{
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log('Disconnect WhatsUp');
  }

}


/* Глобальный объект, который будет работать с провайдерами */
class NotificationSender {
  constructor(private provider: IProvider) {}

  send() {
    this.provider.connect('connect');
    this.provider.sendMessage('message');
    this.provider.disconnect();
  }
}

/* Реализация отложенного уведомления через наследование */

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider)
  }
  sendDelayed() {
    //
  }
}

const sender = new NotificationSender(new TelegrammProvider());
sender.send();

const sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send();


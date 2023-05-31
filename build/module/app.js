"use strict";
/*
  Структурные паттерны:

  Proxy (Прокси) - добавление дополнительный слой, который позволяет обращаться к финальному объекту, но добавляет какую-то логику
*/
/* Пример API */
class PaymentAPI {
    constructor() {
        this.data = [{ id: 1, sum: 10000 }];
    }
    getPaymentDetails(id) {
        return this.data.find(d => d.id === id);
    }
}
/* Прокси */
class PeymentAccessProxy {
    constructor(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    getPaymentDetails(id) {
        if (this.userId === 1) {
            return this.api.getPaymentDetails(id);
        }
        console.log('Нет доступа');
        return undefined;
    }
}
const proxy = new PeymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetails(1));
const proxy2 = new PeymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetails(1));

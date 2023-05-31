/*  
  Структурные паттерны:

  Proxy (Прокси) - добавление дополнительный слой, который позволяет обращаться к финальному объекту, но добавляет какую-то логику
*/

interface IPaymnetAPI {
  getPaymentDetails(id: number): IPaymnetDetails | undefined;
}

interface IPaymnetDetails {
  id: number;
  sum: number;
}

/* Пример API */

class PaymentAPI implements IPaymnetAPI {
  private data = [{id: 1, sum: 10000}]
  
  getPaymentDetails(id: number): IPaymnetDetails | undefined {
    return this.data.find(d => d.id === id)
  }

}

/* Прокси */

class PeymentAccessProxy implements IPaymnetAPI {
  constructor(private api: PaymentAPI, private userId: number) {
    
  }

  getPaymentDetails(id: number): IPaymnetDetails | undefined {
    if (this.userId === 1) {
      return this.api.getPaymentDetails(id)
    }
    console.log('Нет доступа');
    return undefined;
  }
}

const proxy = new PeymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetails(1));
const proxy2 = new PeymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetails(1));
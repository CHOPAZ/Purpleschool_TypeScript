/* Упражнение - Корзина товаров
*/

class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number
    ) {}
}

/* Класс Доставки */
class Delivery {
  constructor(
    public date: Date
    ) {}
}

/* Доставка до дома */
class HomeDelivery extends Delivery {
  constructor(
    date: Date,
    public address: string
    ) {
      super(date)
    }
}

/* Доставка до пункта выдачи */
class ShopDelivery extends Delivery {
  constructor(
    public shopId: number
    ) {
    super(new Date)
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery

/* Корзина */
class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  addProduct(product: Product): void {
    this.products.push(product)
  }

  deletProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId)
  }

  /* Получение суммы */
  getSum(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((prev: number, acc: number) => prev + acc, 0)
  }

  /* Получение продуктов */
  getProducts() {
    return this.products
  }

  /* Задаем доставку */
  setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  checkOut() {
    if (this.products.length === 0) {
      throw new Error('Нет никакого товара');
    }
    if (!this.delivery) {
      throw new Error('Нет указан способ доставки');
    }
    return {seccess: true}


  }
}



const cart = new Cart();
cart.addProduct(new Product(1, 'Печенье', 10));
cart.addProduct(new Product(2, 'Торт', 20));
cart.addProduct(new Product(3, 'Шоколад', 15));
cart.deletProduct(1);
cart.setDelivery(new HomeDelivery(new Date, 'asdf'));
console.log(cart.getSum());
console.log(cart.checkOut());
console.log(cart.getProducts());
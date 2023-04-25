"use strict";
/* Упражнение - Корзина товаров
*/
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
/* Класс Доставки */
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
/* Доставка до дома */
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
/* Доставка до пункта выдачи */
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date);
        this.shopId = shopId;
    }
}
/* Корзина */
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deletProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    /* Получение суммы */
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((prev, acc) => prev + acc, 0);
    }
    /* Получение продуктов */
    getProducts() {
        return this.products;
    }
    /* Задаем доставку */
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error('Нет никакого товара');
        }
        if (!this.delivery) {
            throw new Error('Нет указан способ доставки');
        }
        return { seccess: true };
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

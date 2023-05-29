"use strict";
/*
  Порождающие паттерны:

  Singleton(одиночка)

  Цель : есть два класса Service1-2, и они хотять обращаться к третьему сервису и хранить там какие-то ранетайм ключи Map значения
*/
class MyMap {
    constructor() {
        /* Шина обмена каким-то набором данных */
        this.map = new Map();
    }
    /* какая-то бизнес логика */
    clean() {
        this.map = new Map();
    }
    static get() {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}
class Service1 {
    addMap(key, value) {
        const myMap = MyMap.get();
        myMap.map.set(key, value);
    }
}
class Service2 {
    getKeys(key) {
        const myMap = MyMap.get();
        console.log(myMap.map.get(key));
        myMap.clean();
        console.log(myMap.map.get(key));
    }
}
new Service1().addMap('1', 'Work!');
new Service2().getKeys('1');

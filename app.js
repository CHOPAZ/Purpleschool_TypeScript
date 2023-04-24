"use strict";
/* Видимость свойств и методов

  private - есть только в ts
  # - в js - работает не только на этаме компеляции, но и на этапе когда получим js  и работаем с ним
*/
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0); // приватное свойство
    }
    addDamages(damage) {
        this.damages.push(damage);
    }
    set model(m) {
        this._model = m;
        __classPrivateFieldSet(this, _Vehicle_price, 100, "f");
    }
    get model() {
        return this._model;
    }
}
_Vehicle_price = new WeakMap();
class EuroTruck extends Vehicle {
    setRun(km) {
        //this._model - нельзя получить
        //this.#price = 100 - нельзя
        this.run = km / 0.62;
    }
}
new Vehicle();

"use strict";
/*
  Generic классы
*/
class Resp {
    constructor(data, error) {
        this.data = data;
        this.error = error;
    }
}
const res = new Resp('data', 0);
/* Наследование */
class HTTPResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const res2 = new HTTPResp();
/* Generic полезны в классах, когда есть некоторый универсальный верхняя часть  объект например Resp<D, E>, и венутри есть переменные поля, которые могут зависить от реалдизации, например data которая может быть любым типом*/

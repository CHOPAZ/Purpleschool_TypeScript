/*  
  Generic классы
*/

class Resp<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    this.data = data;
    this.error = error
  }
}


const res = new Resp<string, number>('data', 0)


/* Наследование */

class HTTPResp<F> extends Resp<string, number>{
  code: F;

  setCode(code: F) {
    this.code = code
  }
}

const res2 = new HTTPResp();

/* Generic полезны в классах, когда есть некоторый универсальный верхняя часть  объект например Resp<D, E>, и венутри есть переменные поля, которые могут зависить от реалдизации, например data которая может быть любым типом*/

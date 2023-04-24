/* Видимость свойств и методов

  private - есть только в ts
  # - в js - работает не только на этаме компеляции, но и на этапе когда получим js  и работаем с ним
*/

class Vehicle {
  public make: string; // публичное свойство - public make: string;
  private damages: string[]; //приватное свойство -  private damages: string[];
  private _model: string;
  protected run: number; // отличие от private, что это свойство можно получить в другом отнаследованном классе (EuroTruck)
  #price: number; // приватное свойство

  addDamages(damage: string) {
    this.damages.push(damage)
  }

  set model(m: string) {
    this._model = m;
    this.#price = 100
  }

  get model() {
    return this._model
  }
}



class EuroTruck extends Vehicle {
  setRun(km: number) {
    //this._model - нельзя получить
    //this.#price = 100 - нельзя
    this.run = km / 0.62
  }
}

new Vehicle()
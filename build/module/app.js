"use strict";
/*
  Структурные паттерны:

  Adapter (Адаптер) - (переходник) Например: (из реальной жизни) переходник с usb 3.0 на TP-C :)
  - позволяет адаптировать, какой-то неподходящий объект к использованию в нашей среде
*/
class KVDataBase {
    constructor() {
        this.db = new Map();
    }
    save(key, value) {
        this.db.set(key, value);
    }
}
class PersitentDB {
    savePersistent(data) {
        console.log(data);
    }
}
/* Адпатер, который наследует KVDataBase, в конструктор передается PersitentDB*/
class PersitentDBAdapter extends KVDataBase {
    constructor(dataBase) {
        super();
        this.dataBase = dataBase;
    }
    save(key, value) {
        this.dataBase.savePersistent({ key, value });
    }
}
/* Код, который работает только с KVDataBase  */
function run(base) {
    base.save('key', 'myValue');
}
run(new PersitentDBAdapter(new PersitentDB()));

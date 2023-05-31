/*  
  Структурные паттерны:

  Adapter (Адаптер) - (переходник) Например: (из реальной жизни) переходник с usb 3.0 на TP-C :)
  - позволяет адаптировать, какой-то неподходящий объект к использованию в нашей среде
*/

class KVDataBase {
  private db: Map<string, string> = new Map();
  save(key: string, value: string) {
    this.db.set(key, value)
  }
}

class PersitentDB {
  savePersistent(data: Object) {
    console.log(data);
  }
}

/* Адпатер, который наследует KVDataBase, в конструктор передается PersitentDB*/
class PersitentDBAdapter extends KVDataBase {
  constructor(public dataBase: PersitentDB) {
    super()
  }

  override save(key: string, value: string): void {
    this.dataBase.savePersistent({key, value})
  }
}


/* Код, который работает только с KVDataBase  */
function run(base: KVDataBase) {
  base.save('key', 'myValue')
}

run(new PersitentDBAdapter(new PersitentDB()))
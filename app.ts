/*  Generic - обобщенный тип позволяет резервировать место для типа, который будет при вызове заменен на определенный

Пример встроенных Generic
*/
const arr: Array<number> = [1, 2, 3]; // interface Array<T> - T generic

/* Промисы */
async function test() {
  const prom = await new Promise<number>((resolve, reject) => {
    resolve(1)
  })
}

/* Recorc - словарь с ключом значений. drive - string, true - boolean */
const check: Record<string, boolean> = {
  drive: true,
  kpp: false
}



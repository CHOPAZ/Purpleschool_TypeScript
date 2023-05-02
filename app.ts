/*  
  Ограничения genreic

  Нельзя рабоать с generic как с определенным типом и обращатьяс к его свойствам
*/

class Vehicle {
  run: number;
}


/* Код не работает, потомучто хотим обратится к свойству run у  универсальноого generic T  */
function kmToMilles<T>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle
}

class LCV extends Vehicle {
  capacity: number;
}

function kmToMilles2<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle
}

const vehicle = kmToMilles2(new Vehicle());
const lcv = kmToMilles2(new LCV());
kmToMilles2({a: 1}) // ошибка
kmToMilles2({run: 1}) // подходит под описание класса

/* Так же можно работать с Interface */

/*  */

function logId<T extends string | number >(id: T): T {
  console.log(id);
  return id
}

/* Использование нескольких generic */
function logId2<T extends string | number, Y >(id: T, additionalDate: Y): {id: T, data: Y} {
  console.log(id);
  console.log(additionalDate);
  return {
    id: id,
    data: additionalDate
  }
}
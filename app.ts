/*  Generic - обобщенный тип позволяет резервировать место для типа, который будет при вызове заменен на определенный

Функция generic
*/
function logMiddleWare<T>(data: T): T {
  console.log(data);
  return data
}

const res1 = logMiddleWare<string>('10');
const res2 = logMiddleWare<number>(10);

function getSplitedHalf<T>(arr: Array<T>): Array<T> {
  const len = arr.length / 2;
  return arr.splice(0, len)
}

getSplitedHalf<number>([1, 3, 4])
getSplitedHalf([1, 3, 4])
/*  
  Conditional Types

  Infer - берет и псевдообъявляет переменную типа внутри extends
*/
function runTransaction(transaction: {
  fromTo: [string, string]
}) {
  console.log(transaction);
}

const transaction = {
  fromTo: ['1', '2']
}

runTransaction(transaction)

/* Решение проблемы
  T extends (first: infer First, - из first вытаскивает тип First
*/

const transaction2: GetFirstArg<typeof runTransaction> = {
  fromTo: ['1', '2']
}

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never
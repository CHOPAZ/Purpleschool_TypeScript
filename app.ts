/* unknown - исключительно в ts - означает что неизвестно что лежит в переменной. переменная может прийти откуда то извне, либо это ошибка какая-то
  таким образом нужно обозначить что есть какая то переменная, тип которой мы заранее не знаем, но не Any

  unknown нельзя положить в любую другую переменную, передать функцию в качестве параметра в которой задан тип, пока не сделаем приведение типов или определим что это за тип
*/

let input: unknown;
input = 3;
input = ['sf'];

let res: string = input // ошибка ts, что тип  unknown не может быть назначен для типа string
let res2: any = input // Работает

/* Как правильно опредеоить что за тип и сделать сужение типов */
function run(i: unknown) {
  if(typeof i == 'number') {
    i++; // number
  } else {
    i // unknown
  }
}

run(input)


/* на практике */

/* С TS 4.4 ошибка стала unknown, раньше была any */

/* более явное приведение типов */
async function getData() {
  try {
    await fetch('')
  } catch(error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }

}

/* не явная проверка, может ошибка, что где то неправильно прокинули ошибку и пришла строка а не Error */
async function getDataForce() {
  try {
    await fetch('')
  } catch(error) {
      const e = error as Error
      console.log(e.message);
  }

}

/* unknown и union с абсолютно любым типом будет unknown */

type U1 = unknown | null

/* intersaction(&) unknown и любого другого типа будет любой тип  */
type I1 = unknown & string
/*  
  Typeof - 
*/

/*
  Вспомним:
  Typeof для сужения типов, когда есть union type
  typeof - js часть для сужения типов
 */
let strOrNum: string | number = 5;

if ( Math.random() > 0.5) {
  strOrNum = 5;
} else {
  strOrNum = 'str'
}

if (typeof strOrNum === 'string') {
  console.log(strOrNum); //string
} else {
  console.log(strOrNum); //number
}

/* typeof - исключение типов, ts часть */

let str2OrNum: typeof strOrNum; //string | number

const user = {
  name: 'Vasya'
};

type keyOfUser = keyof user; //неполучится, т.к. user относится к значению, но здесь используется как тип, тип у нее не user, а - name: string
type keyOfUser2 = keyof typeof user; // type keyOfUser2 = "name"

enum Direction {
  Up,
  Dowm
}

type d = keyof typeof Direction;
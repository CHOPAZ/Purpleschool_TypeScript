/*  
  Необходимо написать функцию группировки, которая принимает массив объектов
  и его ключ, производит группировку по указанному ключу и возращает
  сгруппированный объект.

*/

interface IData {
  group: number;
  name: string;
}

const data: IData[] = [
  { group: 1, name: 'a'},
  { group: 1, name: 'b'},
  { group: 2, name: 'c'},
]

interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol

function groupSort<T extends Record<key, any>>(arrData: T[], key: keyof T): IGroup<T> {
  return arrData.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let curEl = map[itemKey]
    if (Array.isArray(curEl)) {
      curEl.push(item)
    } else {
      curEl = [item]
    }
    map[itemKey] = curEl;
    return map
  }, {})
}

const res = groupSort<IData>(data, 'group');
console.log(res);



"use strict";
/*
  Необходимо написать функцию группировки, которая принимает массив объектов
  и его ключ, производит группировку по указанному ключу и возращает
  сгруппированный объект.

*/
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function groupSort(arrData, key) {
    return arrData.reduce((map, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
const res = groupSort(data, 'group');
console.log(res);

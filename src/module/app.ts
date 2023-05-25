/*  
  Модульность и библиотеки

  Модульность на frontend
  Существует две оцпии:
  1. Собираем все в один bundle,  при помощи webpack, rollup
  2. Если использовать современные модули, то tsconfig должны быть как для backend + в подключаемом скрипте в html указать <script src="./build/app2.js" type="module"></script>


  Для того что бы файл считался модулем он должен содержать ключевое слово export
  В tsconfig: "module": "commonjs", "outDir": "./build/"

  ES6
  в tsconfig: "module": "ES6",
  в package.json:   "type": "module",
  в конце импорта указать расширение .js
*/

export const a = 5;
export namespace A { // - обертка, позволяющая инкапсулировать в себя некую логику
  export const a = 5;

  export interface B {
    c: number;
  }
}
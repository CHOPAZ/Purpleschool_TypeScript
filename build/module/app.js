/*
  Модульность и библиотеки

  Модульность на backend

  Для того что бы файл считался модулем он должен содержать ключевое слово export
  В tsconfig: "module": "commonjs", "outDir": "./build/"

  ES6
  в tsconfig
*/
export const a = 5;
export var A;
(function (A) {
    A.a = 5;
})(A || (A = {}));

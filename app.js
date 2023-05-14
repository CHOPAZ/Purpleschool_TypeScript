"use strict";
/*
  Упражненеие - валидация форм.

  Необходимо сделать тип для результата валидации
  формы, основываясь на типе формы
*/
const form = {
    name: 'Vasya',
    password: '123'
};
/* результат валидации */
const formValidation = {
    name: {
        isValid: true
    },
    password: {
        isValid: false,
        erroeMessage: 'Должен содержвать длиннее 5 символов'
    }
};

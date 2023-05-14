/*  
  Упражненеие - валидация форм.

  Необходимо сделать тип для результата валидации
  формы, основываясь на типе формы
*/

interface IForm {
  name: string;
  password: string;
}

const form: IForm = {
  name: 'Vasya',
  password: '123'
}


/* результат валидации */
const formValidation: Validation<IForm> = {
  name: {
    isValid: true
  },
  password: {
    isValid: false,
    erroeMessage: 'Должен содержвать длиннее 5 символов'
  }
}

type Validation<T> = {
  [key in keyof T]: {isValid: true} | {isValid: false, erroeMessage: string}
}


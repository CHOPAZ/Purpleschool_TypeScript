/* Упражнение - типизируем ответ сервера */


/* Первый вариант нативный */
/* Интерфейс платежа */
interface Payment {
  sum: number;
  from: number;
  to: number;
}

/* Запрос */
interface PaymentRequest extends Payment{}

/* Ответ */
enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed'
}

interface DataSuccess extends Payment {
  databaseId: number;
}

interface DataFailed {
  errorMessage: string;
  errorCode: number
}

interface ResponceSuccess {
  status: PaymentStatus.SUCCESS
  data: DataSuccess
}

interface ResponceFailed {
  status: PaymentStatus.FAILED
  data: DataFailed
}

function get(): ResponceSuccess | ResponceFailed {

}



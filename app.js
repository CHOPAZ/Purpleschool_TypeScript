"use strict";
/* Упражнение - типизируем ответ сервера */
/* Ответ */
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAILED"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function get() {
}

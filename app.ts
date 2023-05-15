/*  
  Служебные типы

  Pick - берет только необходимое
  Omit - убирает ненужные ключи ,

  Extract
  Exclude
*/

interface PaymentPersistent {
  id: number;
  sum: number;
  from: string;
  to: string
}

type PaymentOmit = Omit<PaymentPersistent, 'id'>; /* 
  type PaymentOmit = {
    sum: number;
    from: string;
    to: string;
  }
*/

type PaymentPick = Pick<PaymentPersistent, 'from' | 'to'>; /* 
  type PaymentPick = {
    id: number;
  }
*/


type ExtractEx = Extract<'from' | 'to' | PaymentOmit, string>; //type ExtractEx = "from" | "to"
type ExcludeEx = Exclude<'from' | 'to' | PaymentOmit, string>; /* 
  type ExcludeEx = {
    sum: number;
    from: string;
    to: string;
  }
*/
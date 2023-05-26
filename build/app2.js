// import { A } from './module/app.js';
// import { a } from './module/app.js';
// console.log(A.a);
// console.log(a);

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
  },
};

ladder.up();

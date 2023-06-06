"use strict";
/*
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  6. Iterator - итерироваться по коллекции, необходим, когда необходимо пройти одну и туже структуру данных разными способами
  (например: обойти по приоритету, обойти по зависимостям)
*/
class Task {
    constructor(prioritet) {
        this.prioritet = prioritet;
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    sortByPriority() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.prioritet > b.prioritet) {
                return 1;
            }
            else if (a.prioritet === b.prioritet) {
                return 0;
            }
            else {
                return -1;
            }
        });
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTask() {
        return this.tasks;
    }
    countTasks() {
        return this.tasks.length;
    }
    getIterator() {
        return new PriorityTaskIterator(this);
    }
}
class PriorityTaskIterator {
    constructor(taskList) {
        this.idxElem = 0;
        taskList.sortByPriority();
        this.taskList = taskList;
    }
    current() {
        return this.taskList.getTask()[this.idxElem];
    }
    next() {
        this.idxElem += 1;
        return this.taskList.getTask()[this.idxElem];
    }
    prev() {
        this.idxElem -= 1;
        return this.taskList.getTask()[this.idxElem];
    }
    index() {
        return this.idxElem;
    }
}
const taskList = new TaskList();
taskList.addTask(new Task(8));
taskList.addTask(new Task(1));
taskList.addTask(new Task(3));
const iterator = taskList.getIterator();
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.index());

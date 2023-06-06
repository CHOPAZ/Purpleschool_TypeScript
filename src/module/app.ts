/*  
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  6. Iterator - итерироваться по коллекции, необходим, когда необходимо пройти одну и туже структуру данных разными способами
  (например: обойти по приоритету, обойти по зависимостям)
*/

class Task {
  constructor(public prioritet: number) {}
}

class TaskList {
  private tasks: Task[] = [];

  public sortByPriority() {
    this.tasks =this.tasks.sort((a, b) => {
      if (a.prioritet > b.prioritet) {
        return 1
      } else if (a.prioritet === b.prioritet) {
        return 0;
      } else {
        return -1;
      }
    })
  }

  public addTask(task: Task) {
    this.tasks.push(task);
  }

  public getTask() {
    return this.tasks;
  }

  public countTasks() {
    return this.tasks.length;
  }

  getIterator() {
    return new PriorityTaskIterator(this)
  }
}



interface IIterator<T> {
  /* текущий элемент */
  current(): T | undefined;
  /* следующий элемент */
  next(): T | undefined;
  /* предыдущий элемент */
  prev():  T | undefined;
  /* текущий индекс элемента */
  index(): number;
}

class PriorityTaskIterator implements IIterator<Task>{
  private idxElem: number = 0;
  private taskList: TaskList;

  constructor(taskList: TaskList) {
    taskList.sortByPriority();
    this.taskList = taskList;
  }

  current(): Task | undefined {
    return this.taskList.getTask()[this.idxElem]
  }
  next(): Task | undefined {
    this.idxElem += 1;
    return this.taskList.getTask()[this.idxElem]
  }
  prev(): Task | undefined {
    this.idxElem -= 1;
    return this.taskList.getTask()[this.idxElem]
  }
  index(): number {
    return this.idxElem
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


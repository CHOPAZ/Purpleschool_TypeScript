"use strict";
/*
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  2. Command (Команда) - отдельный класс, позволяющий реализовать например отложенный запуск или очередь
*/
class User {
    constructor(userId) {
        this.userId = userId;
    }
}
class UserService {
    saveUser(user) {
        console.log(`Сохраняю пользователя с id: ${user.userId}`);
    }
    deleteUser(userId) {
        console.log(`Удаляем пользователя с id: ${userId}`);
    }
}
/* Реализация взаимодействия Controller и UserService через паттерн command*/
class CommandHystory {
    constructor() {
        this.commands = [];
    }
    addCommand(command) {
        this.commands.push(command);
    }
    removeCommand(command) {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commandId = Math.random();
    }
}
class AddUserCommand extends Command {
    constructor(user, receiver, history) {
        super(history);
        this.user = user;
        this.receiver = receiver;
    }
    /* выполнение команды */
    execute() {
        this.receiver.saveUser(this.user);
        this.history.addCommand(this);
    }
    /* откат */
    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.history.removeCommand(this);
    }
}
class Controller {
    constructor() {
        this.history = new CommandHystory;
    }
    addReceiver(receiver) {
        this.receiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(new User(1), this.receiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const controller = new Controller();
controller.addReceiver(new UserService());
controller.run();

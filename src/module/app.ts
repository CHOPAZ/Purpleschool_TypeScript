/*  
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  2. Command (Команда) - отдельный класс, позволяющий реализовать например отложенный запуск или очередь
*/


class User {
  constructor(public userId: number) {}
}

class UserService {
  saveUser(user: User) {
    console.log(`Сохраняю пользователя с id: ${user.userId}`);
  }

  deleteUser(userId: number) {
    console.log(`Удаляем пользователя с id: ${userId}`);
  }
}

/* Реализация взаимодействия Controller и UserService через паттерн command*/

class CommandHystory {
  public commands: Command[] = [];
  addCommand(command: Command) {
    this.commands.push(command)
  }

  removeCommand(command: Command) {
    this.commands = this.commands.filter(c => c.commandId !== command.commandId)
  }
}
abstract class Command {
  public commandId: number;

  abstract execute(): void;

  constructor(public history: CommandHystory) {
    this.commandId = Math.random()
  }
}

class AddUserCommand extends Command {
  constructor(
    private user: User,
    private receiver: UserService,
    history: CommandHystory
    ) {
    super(history);
  }

  /* выполнение команды */
  execute(): void {
    this.receiver.saveUser(this.user);
    this.history.addCommand(this)
  }

  /* откат */
  undo() {
    this.receiver.deleteUser(this.user.userId)
    this.history.removeCommand(this);

  }
}



class Controller {
  receiver: UserService;
  history: CommandHystory = new CommandHystory;
  addReceiver(receiver: UserService) {
    this.receiver = receiver;
  }


  run() {
    const addUserCommand = new AddUserCommand(
      new User(1),
      this.receiver,
      this.history
    );
    addUserCommand.execute();
    console.log(addUserCommand.history);
    addUserCommand.undo();
    console.log(addUserCommand.history);
  }
}

const controller = new Controller();
controller.addReceiver(new UserService());
controller.run()
/*  
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  5. Strategy - поведенческий алгоритм, в рамках которого, выделяем схожее поведение (алгоритмы) в нашей системе в отдельные классы,
    после чего можно быстро их испольвзовать взаимозаменяя друг другом
*/

class User {
  githubToken: string;
  jwtToken: string;
}

interface AuthStratуgy {
  auth(user: User): boolean;
}

class Auth {
  constructor(private strategy: AuthStratуgy) {}

  setStrategy(strategy: AuthStratуgy) {
    this.strategy = strategy
  }
  public authUser(user: User): boolean {
    return this.strategy.auth(user)
  }
}

class JWTStrategy implements AuthStratуgy {
  auth(user: User): boolean {
    if (user.jwtToken) {
      //логика
      return true
    }
    return false
  }
  
}

class GitHubStrategy implements AuthStratуgy {
  auth(user: User): boolean {
    if (user.githubToken) {
      //логика
      return true
    }
    return false
  }
}

const user = new User();
user.jwtToken = 'token';

const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));

auth.setStrategy(new GitHubStrategy());
console.log(auth.authUser(user));
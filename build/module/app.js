"use strict";
/*
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  5. Strategy - поведенческий алгоритм, в рамках которого, выделяем схожее поведение (алгоритмы) в нашей системе в отдельные классы,
    после чего можно быстро их испольвзовать взаимозаменяя друг другом
*/
class User {
}
class Auth {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    authUser(user) {
        return this.strategy.auth(user);
    }
}
class JWTStrategy {
    auth(user) {
        if (user.jwtToken) {
            //логика
            return true;
        }
        return false;
    }
}
class GitHubStrategy {
    auth(user) {
        if (user.githubToken) {
            //логика
            return true;
        }
        return false;
    }
}
const user = new User();
user.jwtToken = 'token';
const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GitHubStrategy());
console.log(auth.authUser(user));

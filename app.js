"use strict";
/* Упражнение - перезагрузка методов
*/
class User {
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills = this.skills.concat(skillOrSkills);
        }
    }
}
new User().addSkill('Dev');
new User().addSkill(['DevOps']);
function run(distance) {
    if (typeof distance == 'number') {
        return 1;
    }
    else {
        return '';
    }
}

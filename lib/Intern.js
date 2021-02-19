const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);
    }
    
    internDetails() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            school: this.school
        }
    }
}

module.exports = Intern;
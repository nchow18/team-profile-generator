const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
    }

    engineerDetails() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github
        }
    }
}


module.exports = Engineer;
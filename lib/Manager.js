const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '')  {
        super(name);
    }


    managerDetails(office) {

        this.office = office;


    }
}


module.exports = Manager;
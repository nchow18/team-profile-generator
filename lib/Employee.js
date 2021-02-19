const inquirer = require('inquirer');

var employeeArr = [];
var managerArr = [];

class Employee {
    constructor(name, id, email, role, office, github, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.office = office;
        this.github = github;
        this.school = school;
    }

    getName(employeeName) {
        this.name = employeeName;
    }

    getId(employeeId) {
        this.id = employeeId;
    }

    getEmail(employeeEmail) {
        this.email = employeeEmail;
    }

    getOffice(managerOffice) {
        this.office = managerOffice;
    }

    getGithub(engineerGithub) {
        this.github = engineerGithub;
    }

    getSchool(internSchool) {
        this.school = internSchool;
    }
}




module.exports = Employee;
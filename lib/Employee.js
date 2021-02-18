const inquirer = require('inquirer');

class Employee {
    constructor() {
        this.name;
        this.id;
        this.email;
        this.role;
        this.employees = {
            manager: [],
            engineer: [],
            intern: [],
        };
        this.office;
        this.github;
        this.school;
    }

    getName() {

        console.log(`
        ===============
        Adding Employee
        ===============
        `);

        inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .then(({ name }) => {
            this.name = name;

            this.getId();
        });
    }

    getId() {
        inquirer.prompt({
            type: 'input',
            name: 'id',
            message: 'What is your ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .then(({ id }) => {
            this.id = id;

            this.getEmail();
        });
    }

    getEmail() {
        inquirer.prompt({
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .then(({ email }) => {
            this.email = email;

            this.getRole();
        })
    }

    getRole() {
        const Manager = require('../lib/Manager');
        const Engineer = require('../lib/Engineer');
        const Intern = require('../lib/Intern');

        inquirer.prompt({
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern']
        })
        .then(({ role }) => {
            this.role = role;

            // MANAGER
            if(role === 'Manager') {

                this.employees.manager.push({
                    name: this.name,
                    id: this.id,
                    email: this.email,
                    role: this.role
                })
          
                this.getOffice();
            }
            // ENGINEER
            if (role === 'Engineer') {
                
                this.employees.engineer.push({
                    name: this.name,
                    id: this.id,
                    email: this.email,
                    role: this.role
                })

                this.getGithub();
            }
            // INTERN
            if (role === 'Intern') {
                new Intern().getSchool()
            }
        })
    }

    getOffice() {
        inquirer.prompt({
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .then(({ office }) => {
            this.office = office;

            const index = this.employees.manager.length - 1;

            this.employees.manager[index].office = this.office;
                 
            console.table(this.employees.manager);

            console.log(`
            =====================
            END OF ADDING MANAGER
            =====================
            `)

            this.addEmployee();
        })
    }

    getGithub() {
        inquirer.prompt({
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .then(({ github }) => {
            this.github = github;

            const index = this.employees.engineer.length - 1;

            this.employees.engineer[index].github = this.github;

            console.table(this.employees.engineer);

            console.log(`
            ======================
            END OF ADDING ENGINEER
            ======================
            `)

            this.addEmployee();
        })
    }

    getSchool() {
        inquirer.prompt({
            type: 'input',
            name: 'school',
            message: 'What was your School name?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .then(({ school }) => {
            this.school = school;

            const index = this.employees.intern.length -1;

            this.employees.intern[index].school = this.school;

            console.log(this.employees.intern);

            console.log(`
            ====================
            END OF ADDING INTERN
            ====================
            `)

            this.addEmployee();
        })
    }

    addEmployee() {
        inquirer.prompt({
            type: 'list',
            name: 'add',
            message: 'Would you like to add another employee?',
            choices: ['Add Employee', 'END']
        })
        .then(({ add }) => {
            if (add === 'Add Employee') {
                this.getName()
            }
            if (add === 'END') {
                console.log(`
                ===============
                GENERATING HTML
                ===============
                `)
            }
        })
    }

}

module.exports = Employee;
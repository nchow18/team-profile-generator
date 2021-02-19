const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const dataHtml = require('./src/data-html');
const { writeFile, copyFile } = require('./src/generate-html');

const init = (employeeData) => {

    if(!employeeData) {
    employeeData = {
        allData: [],
        managerData: [],
        engineerData: [],
        internData: []
        }
    } 

    console.log(`
    ===============
    Adding Employee
    ===============
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name?',
            validate: nameInput => {
                if (nameInput) {
                    new Employee().getName(nameInput);
                    employeeData.allData.push({
                        name: nameInput
                    })
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employees ID?',
            validate: idInput => {
                if (idInput) {
                    new Employee().getId(idInput);
                    const index = employeeData.allData.length - 1;
                    employeeData.allData[index].id = idInput;
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if (emailInput) {
                    new Employee().getEmail(emailInput);
                    const index = employeeData.allData.length - 1;
                    employeeData.allData[index].email = emailInput;
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    .then(({role}) => {
        // MANAGER
        if(role === 'Manager') {
            return inquirer.prompt({
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
                validate: officeInput => {
                    if (officeInput) {
                        new Employee().getOffice(officeInput)

                        const index = employeeData.allData.length - 1;
                        employeeData.managerData.push(
                            employeeData.allData[index]
                        )
                        const manindex = employeeData.managerData.length - 1;
                        employeeData.managerData[manindex].office = officeInput;

                        return true;
                    } else {
                        return false;
                    }
                }  
            })
        }
        // ENGINEER
        if (role === 'Engineer') {
            return inquirer.prompt({
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
                validate: githubInput => {
                    if (githubInput) {
                        new Employee().getGithub(githubInput)
                                                
                        const index = employeeData.allData.length - 1;
                        employeeData.engineerData.push(
                            employeeData.allData[index]
                        )
                        const manindex = employeeData.engineerData.length - 1;
                        employeeData.engineerData[manindex].github = githubInput;
                        return true;
                    } else {
                        return false;
                    }
                }
            })
        }
        // INTERN
        if (role === 'Intern') {
            return inquirer.prompt(
            {
                type: 'input',
                name: 'school',
                message: 'What school did you attend?',
                validate: schoolInput => {
                    if (schoolInput) {
                        new Employee().getSchool(schoolInput)
                                                
                        const index = employeeData.allData.length - 1;
                        employeeData.internData.push(
                            employeeData.allData[index]
                        )
                        const manindex = employeeData.internData.length - 1;
                        employeeData.internData[manindex].school = schoolInput;

                        return true;
                    } else {
                        return false;
                    }
                }
                }
            )
        }
    })
    .then(start => {
        if (start) {
            console.log(`
            ====================================
            Do you want to add another Employee?
            ====================================
            `);
        
            return inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Would you like to add another employee?',
                    default: false
                }
            ])
            .then(data => {
                if (data.addEmployee) {
                    console.log(`===== MANAGER DATA =====`)
                    console.table(employeeData.managerData);
                    console.log(`===== ENGINEER DATA =====`)
                    console.table(employeeData.engineerData);
                    console.log(`===== INTERN DATA =====`)
                    console.table(employeeData.internData);
                    return init(employeeData)
                } else {
                    console.log(`===== MANAGER DATA =====`)
                    console.table(employeeData.managerData);
                    console.log(`===== ENGINEER DATA =====`)
                    console.table(employeeData.engineerData);
                    console.log(`===== INTERN DATA =====`)
                    console.table(employeeData.internData);
                    return employeeData;
                }
            })
        }
    })
}

init()
    .then(Data => {
        return dataHtml(Data)
    })
    .then(employeeData => {
        return writeFile(employeeData)
    })
    .then(employeeData => {
        return copyFile(employeeData);
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
    .catch(err => {
        console.log(err);
    })



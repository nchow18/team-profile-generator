const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

module.exports = employeeData => {

    const {name, id, email, role, office, github, school} = employeeData

    console.log(`
    ===================
    BEGINNING DATA-HTML
    ===================
    `)

    console.log(employeeData)

    return `
    
    ${employeeData.managerData[0].name}
    
    `
}



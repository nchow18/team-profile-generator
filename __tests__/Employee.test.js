const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates employee class profile object', () => {
    const employee = new Employee('name');

    expect(employee.name).toEqual(employee.name);
    expect(employee.id).toEqual(employee.id);
    expect(employee.email).toEqual(employee.email);
    expect(employee.role).toEqual(employee.role);
})
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates employee class profile object', () => {
    const employee = new Employee ();

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
    expect(employee.role).toBe('role');
})
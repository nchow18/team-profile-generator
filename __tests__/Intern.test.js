const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create Intern class profile', () => {
    const intern = new Intern ('name', 'id', 'email');

    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.email).toBe('email');
})
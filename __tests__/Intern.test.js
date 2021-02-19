const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create Intern class profile', () => {
    const intern = new Intern ('name');

    expect(intern.name).toEqual(intern.name);
    expect(intern.id).toEqual(intern.id);
    expect(intern.email).toEqual(intern.email);
    expect(intern.school).toEqual(intern.school);
})
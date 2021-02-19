const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('create Engineer class profile', () => {
    const engineer = new Engineer('Name');

    expect(engineer.name).toEqual(engineer.name);
    expect(engineer.id).toEqual(engineer.id);
    expect(engineer.email).toEqual(engineer.email);
    expect(engineer.office).toEqual(engineer.office);
})
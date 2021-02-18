const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('create Engineer class profile', () => {
    const engineer = new Engineer ('name', 'id', 'email');

    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.email).toBe('email');
})
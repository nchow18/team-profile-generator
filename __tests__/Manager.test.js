const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates manager profile object', () => {
    const manager = new Manager ('name', 'id', 'email');

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
})


const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
jest.mock('../lib/Manager')

console.log(new Manager());

test('creates manager profile', () => {
    const manager = new Manager('Name');

    expect(manager.name).toEqual(manager.name);
    expect(manager.id).toEqual(manager.id);
    expect(manager.email).toEqual(manager.email);
    expect(manager.office).toEqual(manager.office);

})


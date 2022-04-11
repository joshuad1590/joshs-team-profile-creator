const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Manager = require('../lib/Manager');
const manager = new Manager('john', '12', 'john@gmail.com', '555-5555');

test('to see if the manager object constructors will work', () => {
    expect(manager.name).toBe('john');
    expect(manager.id).toBe('12');
    expect(manager.email).toBe('john@gamil.com');
    expect(manager.number).toBe('555-5555');
});


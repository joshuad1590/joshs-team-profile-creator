const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Manager = require('../lib/Manager');
const manager = new Manager('');

test('to see if the manager object constructors will work', () => {
    expect(manager.name).toBe('');
    expect(manager.id).toBe('');
    expect(manager.email).toBe('');
    expect(manager.number).toBe('');
});


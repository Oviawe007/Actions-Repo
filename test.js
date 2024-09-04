// test.js
const greet = require('./index');
const assert = require('assert');

describe('Greet Function', function() {
    it('should return a greeting message', function() {
        assert.strictEqual(greet('World'), 'Hello, World!');
    });
});

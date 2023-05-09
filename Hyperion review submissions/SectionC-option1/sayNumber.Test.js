// Importing the assert object from the chai library.
// The assert object provides assertion methods for testing and verifying expected outcomes.
// Importing the sayNumber function from a file located in the current directory, named 'option 1'.
// The sayNumber function is expected to convert numbers to words.
// Test suite using describe with the label 'sayNumber'.
// Within the test suite, it defines an individual test case using it with the label 'should convert numbers to words correctly'.
// Inside the test case, multiple assertions are made using assert.equal to verify that the sayNumber function produces the expected word representations for various input numbers.

const { assert } = require('chai');
const sayNumber = require('./option 1');

describe('sayNumber', () => {
    it('should convert numbers to words correctly', () => {
        assert.equal(sayNumber(0), 'Zero.');
        assert.equal(sayNumber(1), 'One.');
        assert.equal(sayNumber(10), 'Ten.');
        assert.equal(sayNumber(25), 'Twenty-five.');
        assert.equal(sayNumber(100), 'One hundred.');
        assert.equal(sayNumber(123), 'One hundred and twenty-three.');
        assert.equal(sayNumber(1000), 'One thousand.');
    });
});
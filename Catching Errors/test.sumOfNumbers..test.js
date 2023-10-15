const chai = require('chai');
const expect = chai.expect;
const sum = require('./sumOfNumbers').sum

describe('Sum Function', () => {
    it('should return the sum of all numbers in array', () => {
        const result = sum([1, 2, 3, 4]);
        expect(result).to.equal(10);
    });
    it('should return 0 for an empty array', () => {
        result = sum([]);
        expect(result).to.equal(0);
    })
    it('should return the sum of all numbers in array', () => {
        result = sum([1, 2, 3]);
        expect(result).to.equal(6);
    })
})
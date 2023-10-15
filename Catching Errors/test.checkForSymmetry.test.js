const chai = require('chai');
const expect = chai.expect;
const isSymmetric = require('./checkForSymmetry');

describe('Should check isSymetric', () => {
    it('input is not an array', () => {
        expect(isSymmetric('1')).to.equal(false);
        expect(isSymmetric(123)).to.equal(false);
        expect(isSymmetric({ key: 'value' })).to.equal(false);
    })
    it("shouldd return true for a symetric array", () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.equal(true);
        expect(isSymmetric(['a', 'b', 'a'])).to.equal(true);
        expect(isSymmetric([1])).to.equal(true);
        expect(isSymmetric([])).to.equal(true);
    })
    it('should return false for a non-symetric array', () => {
        expect(isSymmetric([1, 2, 3, 2, 3, 5])).to.equal(false);
        expect(isSymmetric(['a', 'b', 'c'])).to.equal(false);
    })
    it('should return true for different type of elements in the array', () => {
        expect(isSymmetric(['1', 2, '3', 2, '1'])).to.equal(true);
        expect(isSymmetric(['a', 1, 'a'])).to.equal(true);
    })
    it('should return true for a nested arrays', () => {
        expect(isSymmetric([[1, 2]], [[3]], [[2, 1]])).to.equal(true);
    })
})
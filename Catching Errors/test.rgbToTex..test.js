const expect = require('chai').expect;

const rgbToHextColor = require('./rgbToHex');

describe('rgbToHexColor Function', function () {
    //red
    it('with non integer red,should throw Error', function () {
        //Arrange
        let red = {};
        let blue = 100;
        let green = 100;
        //Act
        let func = () => rgbToHextColor(red, green, blue);
        //Assert
        expect(func).to.throw(Error, 'Test', 'Failed assert cause error message not match')
    })
    it('with non intereger red ,should return undefined', function () {
        let red = 12.5;
        let red1 = '100';
        let green = 100;
        let blue = 100;

        let result = rgbToHextColor(red, green, blue);
        let result1 = rgbToHextColor(red1, green, blue);

        expect(result).to.be.undefined;
        expect(result1).to.be.undefined;

    })
    it('with red edge case values, should return result', function () {
        //Arrange
        let red = 0;
        let red1 = 255
        let red2 = 256
        let red3 = -1
        let blue = 100;
        let green = 100;
        //Act
        let result1 = rgbToHextColor(red, green, blue);
        let result2 = rgbToHextColor(red1, green, blue);
        let result3 = rgbToHextColor(red2, green, blue);
        let result4 = rgbToHextColor(red3, green, blue);
        //Assert
        expect(result1).to.be.equal('#006464')
        expect(result2).to.be.equal('#FF6464')
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    })
    //blue
    it('with non integer red,should throw Error', function () {
        //Arrange
        let red = 100;
        let blue = {};
        let green = 100;
        //Act
        let func = () => rgbToHextColor(red, green, blue);
        //Assert
        expect(func).to.throw(Error, 'Test', 'Failed assert cause error message not match')
    })
    it('with non intereger blue ,should return undefined', function () {
        let red = 100;
        let green = 100
        let blue = '100'
        let blue1 = 12.5

        let result = rgbToHextColor(red, green, blue);
        let result1 = rgbToHextColor(red, green, blue1);

        expect(result).to.be.undefined;
        expect(result1).to.be.undefined;

    })
    it('with red edge case values, should return result', function () {
        //Arrange
        let red = 0;
        let blue = 0;
        let blue1 = 255;
        let blue2 = 256;
        let blue3 = -1;
        let green = 100;
        //Act
        let result1 = rgbToHextColor(red, green, blue);
        let result2 = rgbToHextColor(red, green, blue1);
        let result3 = rgbToHextColor(red, green, blue2);
        let result4 = rgbToHextColor(red, green, blue3);
        //Assert
        expect(result1).to.be.equal('#006400')
        expect(result2).to.be.equal('#0064FF')
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    })
    //green
    it('with non integer red,should throw Error', function () {
        //Arrange
        let red = 100;
        let blue = 100;
        let green = {};
        //Act
        let func = () => rgbToHextColor(red, green, blue);
        //Assert
        expect(func).to.throw(Error, 'Test', 'Failed assert cause error message not match')
    })
    it('with non intereger red ,should return undefined', function () {
        let red = 100;
        let green = 12.5;
        let green1 = '100';
        let blue = 100;

        let result = rgbToHextColor(red, green, blue);
        let result1 = rgbToHextColor(red, green1, blue);

        expect(result).to.be.undefined;
        expect(result1).to.be.undefined;

    })
    it('with red edge case values, should return result', function () {
        //Arrange
        let red = 0;
        let blue = 100;
        let green = 0;
        let green1 = 255;
        let green2 = 256;
        let green3 = -1;
        //Act
        let result1 = rgbToHextColor(red, green, blue);
        let result2 = rgbToHextColor(red, green1, blue);
        let result3 = rgbToHextColor(red, green2, blue);
        let result4 = rgbToHextColor(red, green3, blue);
        //Assert
        expect(result1).to.be.equal('#000064')
        expect(result2).to.be.equal('#00FF64')
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    })
})
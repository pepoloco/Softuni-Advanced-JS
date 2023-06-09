const chai = require("chai");
const expect = chai.expect;

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

describe("mathEnforcer", function () {
  describe("addFive", function () {
    it("should return undefined if the parameter is not a number", function () {
      expect(mathEnforcer.addFive("abc")).to.equal(undefined);
      expect(mathEnforcer.addFive(null)).to.equal(undefined);
      expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
    });

    it("should return the input plus five if the parameter is a number", function () {
      expect(mathEnforcer.addFive(5)).to.equal(10);
      expect(mathEnforcer.addFive(-4)).to.equal(1);
      expect(mathEnforcer.addFive(1.2)).to.be.closeTo(6.2, 0.01);
    });
  });

  describe("subtractTen", function () {
    it("should return undefined if the parameter is not a number", function () {
      expect(mathEnforcer.subtractTen("abc")).to.equal(undefined);
      expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
      expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
    });

    it("should subtract ten from the input if the parameter is a number", function () {
      expect(mathEnforcer.subtractTen(1)).to.equal(-9);
      expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5, 0.01);
      expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
    });
  });

  describe("sum", function () {
    it("should return correct result that is not a number", function () {
      expect(mathEnforcer.sum("1", "2")).to.equal(undefined);
      expect(mathEnforcer.sum("1", 2)).to.equal(undefined);
      expect(mathEnforcer.sum(1, "2")).to.equal(undefined);
    });
    it("should return the sum of params if both of them are num", function () {
      expect(mathEnforcer.sum(1, 2)).to.equal(3);
      expect(mathEnforcer.sum(20.2, 2)).to.be.closeTo(22.2, 0.01);
      expect(mathEnforcer.sum(-2, -2)).to.equal(-4);
    });
  });
});

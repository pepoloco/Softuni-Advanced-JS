const chai = require("chai");
const expect = chai.expect;

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }
  return string.charAt(index);
}
//tests
describe("Retreive chars", function () {
  it("valid input", function () {
    expect(lookupChar("a", 0)).to.equal("a");
  });
  it("valid index", function () {
    expect(lookupChar("abc", 1)).to.equal("b");
  });
  it("invalid input - first param is not a string", function () {
    expect(lookupChar(0, 0)).to.be.undefined;
  });
  it("Second input is a floating number", function () {
    expect(lookupChar("0", 1.2)).to.be.undefined;
  });
  it("Second paam is not a number", () => {
    expect(lookupChar("a", "a")).to.undefined;
  });
  it("Second param is out of the bounds", function () {
    expect(lookupChar("a", -1)).to.eq("Incorrect index");
  });
});

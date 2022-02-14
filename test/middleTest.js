
const middle = require("../middle")
const assertEqual = require("../assertEqual")
const chai = require('chai')
const assert = require("assert");

////assertEqual(middle([1,2]), "The Middle Numbers are 1 and 2");
//assertEqual(middle([1,2,3]), "The Middle Number is 2.");


describe("#middle", () => {
  it("returns 2 for [1,2,3]", () => {
    assert.strictEqual(middle([1,2,3]), 2);
  });
  it("returns 2 and 3 for [1,2,3,4]", () => {
  assert.strictEqual(middle([1,2,3,4]), "2 and 3");
  });
});
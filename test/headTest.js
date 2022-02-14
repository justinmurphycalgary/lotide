
const head = require("../head")
const assertEqual = require("../assertEqual")
const chai = require('chai')
const assert = require("assert");

//original test
//assertEqual(head([4,5,6,7,8]), 4);


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});
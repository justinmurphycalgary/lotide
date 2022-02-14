const tail = require('../tail');
const chai = require('chai')
const assert = require("assert");


describe("#tail", () => {
  it("returns 44 for [22,33,44]", () => {
    assert.strictEqual(tail([22,33,44]), "44");
  });
});



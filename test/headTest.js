
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("return Hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = "Hello";
    const array = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(head(array), result);
  })
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([],undefined));
  })

});
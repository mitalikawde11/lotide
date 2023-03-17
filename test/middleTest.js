const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {

  it("Should return [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("Should return []", () => {
    assert.deepEqual(middle([8]), []);
  });

  it("Should return []", () => {
    assert.deepEqual(middle(['Lighthouse', 'Labs']), []);
  });

  it("Should return [5, 8]", () => {
    assert.deepEqual(middle([6, 5, 8, 2]), [5, 8]);
  });

  it("Should return [3, undefined]", () => {
    assert.deepEqual(middle([1, 3,  , 4]), [3, undefined]);
  });

})



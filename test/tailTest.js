// require(import) chai asstert and tail file
const assert = require('chai').assert;
const tail = require('../tail');



describe("#tail", () => {

  it("Should return [2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("Should return ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("Should return ['2']", () => {
    assert.deepEqual(tail(['Sam', '2']), ['2']);
  });

  it("Should return []", () => {
    assert.deepEqual(tail([]), []);
  });

})



const test = require("node:test");
const assert = require("node:assert/strict");

function add(a, b) {
  return a + b;
}

test("add returns the sum of two numbers", () => {
  assert.equal(add(5, 3), 8);
});

test("add handles negative numbers", () => {
  assert.equal(add(-2, 5), 3);
});

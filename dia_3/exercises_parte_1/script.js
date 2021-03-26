// Exercício 1 
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const expected = sum(4, '5');
assert.strictEqual(expected, 9);
// const expected = sum(0, 0);
// assert.strictEqual(expected, 0);
// const expected = sum(4, 5);
// assert.strictEqual(expected, 9);
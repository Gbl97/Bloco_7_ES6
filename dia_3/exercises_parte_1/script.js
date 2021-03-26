// Exercício 1 
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// const expected = sum(4, '5');
// assert.strictEqual(expected, 9);
// const expected = sum(0, 0);
// assert.strictEqual(expected, 0);
// const expected = sum(4, 5);
// assert.strictEqual(expected, 9);

// Exercício 2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4, 5], 5), [1, 2, 3, 4]);
// const array = [1, 2, 3, 4];
// myRemove(array, 1);
// assert.deepStrictEqual(array, [1, 2, 3, 4]);
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// Exercício 3 
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myRemoveWithoutCopy(array3, 5));


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
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));

// Exercício 4
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.deepStrictEqual(myFizzBuzz(9), 'fizz');
// assert.deepStrictEqual(myFizzBuzz(25), 'buzz');
// assert.deepStrictEqual(myFizzBuzz(8), 8);
// assert.deepStrictEqual(myFizzBuzz('9'), false);

// Exercício 5
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
// assert.deepStrictEqual(obj1, obj2);
// assert.notDeepStrictEqual(obj1, obj3);
// assert.notDeepStrictEqual(obj2, obj3);

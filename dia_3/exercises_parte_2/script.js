// Exercício 1 
const assert = require('assert');
// escreva a função addOne aqui

const addOne = (array) => {
    let oneArray = [];

    for (let index = 0; index < array.length; index += 1) {
        oneArray.push(array[index] + 1);
    }
    return oneArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// Exercício 2
const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
    let wordArray = [];

    for (let index = 0; index < array.length; index += 1) {
        wordArray.push(array[index].length);
    }
    return wordArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
// Exercício 1
const assert = require('assert');

const greetPeople = (people) => {
    let message = [];
  
    for (const person in people) {
      let greeting = 'Hello ';
      message.push(greeting + people[person]);
    }
    return message;
  };
//   const parameter = ['Irina', 'Ashleigh', 'Elsa'];
//   const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
//   assert.deepStrictEqual(greetPeople(parameter), result);
//   console.log(greetPeople(parameter));

// Exercício 2
const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let cont = 1;
  
    for (let index = 0; index < characters.length; index += 1) {
        if ('aeiou'.includes(characters[index])) {
          results.push(cont);
          cont += 1;
        } else {
        results.push(characters[index]);
        }
    }
    return results.join('');
  };
//   const parameter = 'Dayane';
//   const result = 'D1y2n3';
//   assert.deepStrictEqual(removeVowels(parameter), result);
//   console.log(removeVowels(parameter));

// Exercício 3
const greaterThanTen = (array) => {
    let results = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > 10) {
        results.push(array[index]);
      }
    }
    return results;
  };
//   const parameter = [4, 10, 32, 9, 21];
//   const result = [32, 21];
//   assert.deepStrictEqual(greaterThanTen(parameter), result);
//   console.log(greaterThanTen(parameter));

// Exercício 4
function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x - y;
    });
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
assert.deepStrictEqual(secondThirdSmallest(parameter), result);
// console.log(secondThirdSmallest(parameter));

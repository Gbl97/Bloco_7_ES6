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
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  assert.deepStrictEqual(removeVowels(parameter), result);
//   console.log(removeVowels(parameter));
// Exercício 3
// Exercício 4
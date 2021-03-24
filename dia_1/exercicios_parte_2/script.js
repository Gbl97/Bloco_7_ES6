// Execicio 1 -Opção 1 de resolução
// Link que ajudou na resolução do exercício: https://www.devmedia.com.br/calculando-fatorial-em-java/14273
const fatorial = (number) => {
    let fatorial = number;
    let cont = fatorial;

    while (fatorial > 1 || fatorial === 0) {
        if (fatorial === 0) {
            fatorial = 1;
            return `O fatorial de ${number} é: ${fatorial}`;
        }
        cont *= (fatorial - 1);
        fatorial -= 1;
    }
    return `O fatorial de ${number} é: ${cont}`;
}
console.log(fatorial(0));

// Exercicio 1 - Opção 2 de resolução
// https://www.guj.com.br/t/aprendendo-modo-ternario/93509/4
const metodoRecursivo = (number) => {
    let metodoRecursivo = fatorialRecursivo(number);

    console.log(`O fatorial de ${number} é: ${metodoRecursivo}`);
}

const fatorialRecursivo = (number) => {
    let fatorial;

    if (number === 0) {
        fatorial = 1;
        return fatorial;
    }

    fatorial = number <= 1 ? number : (fatorialRecursivo(number - 1) * number);

    return fatorial;

}
metodoRecursivo(-1);

// Exercicio 2 
const longestWord = (palavra) => {
    let arrayWord = palavra.split(' ');
    console.log(arrayWord);
    let maior = 0;
    let result = '';

    for (const key in arrayWord) {
        if (key.length > maior) {
            maior = key.length;
            result += arrayWord[key];
        }
    }
    return result;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Exercicio 3 
// https://pt.stackoverflow.com/questions/122316/contador-javascript-de-clicks
const btnExercise3 = document.getElementById('btn-exercise-3');
const clickCount = document.querySelector('#click-count');

btnExercise3.addEventListener('click', () => {
    let number = parseInt(clickCount.textContent) + 1;
    clickCount.textContent = number;
});









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

    for (const key of arrayWord) {
        if (key.length > maior) {
            maior = key.length;
            result = key;
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

// Exercicio 4
// Função 1
const procuraString = (string) => {
    let frase = "Tryber x aqui!";
    let result = "";

    if (frase.search('x')) {
        result = frase.replace('x', string);
    }

    return `"${result}"`;
    
}

// Função 2
// Exercício feito com a ajuda do código do Maurício Viegas
// Link: https://github.com/mvrdgs/trybe-exercises/blob/0b7992f29e3827928bca9a287673aad4bdb17d5f/mod7/dia_1/exercicio02pt04.js
const habilidades = ['Git', 'GitHub', 'HTML', 'CSS', 'JavaScript'];

const messagem = (nome) => {
    const user = (nome);

    const mensagem = `${user} Minhas cinco principais habilidades são:
    ${habilidades[0]};
    ${habilidades[1]};
    ${habilidades[2]};
    ${habilidades[3]};
    ${habilidades[4]};

    #goTrybe` 
    return mensagem;

}
console.log(messagem(procuraString('Gabriel')));








const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   // Exercício 1
//   const turno = (objeto, chave, valor) => {
//      let newKey = chave;
//      chave = valor;
//      objeto[newKey] = chave;

//     return Object.values(objeto);
//   }
  
//   // EXercício 2
//   const listandoChaves = (objeto) => Object.keys(objeto);

//   // Exercício 3
//   const comprimentoDoObjeto = (objeto) => Object.keys(objeto).length;
  
//   // Exercício 4
//   const listandoValores = (objeto) => Object.values(objeto);
  
//   // Exercício 5
//   const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  
//   // Exercício 6
//   const totalDeEstudantes = (objeto) => {
//     const estudantes_1 = objeto.lesson1.numeroEstudantes;
//     const estudantes_2 = objeto.lesson2.numeroEstudantes;
//     const estudantes_3 = objeto.lesson3.numeroEstudantes;
//     const total = estudantes_1 + estudantes_2 + estudantes_3;

//     return `Total de Estudantes: ${total}`;
//   }
 
//   // Exercício 7
//   const getValueByNumber = (objeto, chave) => {
//       const key = Object.keys(objeto);
//       let valor = objeto[key[chave]];
//       return valor;
//   }

// // Output: 'Matématica'

  // Exercício 8
  const verifyPair = (objeto, key, value) => {

    if (Object.keys(objeto).includes(key) && Object.values(objeto).includes(value)) {
        return true;
    }
    return false;
  }
  console.log(verifyPair(lesson3, 'turno', 'noite')); // Output: true
  console.log(verifyPair(lesson3, 'materia', 'Beto')); // Output: false

  
//   console.table(turno(lesson2, 'turno', 'manhã'));
//   console.log(listandoChaves(lesson3));
//   console.log(comprimentoDoObjeto(lesson1));
//   console.log(listandoValores(lesson2));
//   console.log(allLessons);
//   console.log(totalDeEstudantes(allLessons));
//   console.log(getValueByNumber(lesson1, 0));
//   console.log(getValueByNumber(lesson1, 0));
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

  // Exercício 1
  const turno = (objeto, chave, valor) => {
     let newKey = chave;
     chave = valor;
     objeto[newKey] = chave;

    return Object.values(objeto);
  }
  console.table(turno(lesson2, 'turno', 'manhã'));

  // EXercício 2
  const listandoChaves = (objeto) => Object.keys(objeto);
  console.log(listandoChaves(lesson3));

  // Exercício 3
  const comprimentoDoObjeto = (objeto) => Object.keys(objeto).length;
  console.log(comprimentoDoObjeto(lesson1));

  // Exercício 4
  const listandoValores = (objeto) => Object.values(objeto);
  console.log(listandoValores(lesson2));
  // Exercício 5
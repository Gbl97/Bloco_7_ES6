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
  // Exercício 3
  // Exercício 4
  // Exercício 5
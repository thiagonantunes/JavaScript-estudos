let x;

const firstName = 'Jhon';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
}

// console.log(person.firstName)

// Desctructuring

 const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John Doe'
  }
 };

 const {id, title, user: {name}} = todo

 console.log(name)

 //Destructure arrays
 const numbers = [23, 67, 33, 49];

 const [first, second, ...rest] = numbers


const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];
const lista = [alunos, medias];

function test(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista; //Desestruturação
    const index = alunos.indexOf(aluno);
    return `${alunos[index]}, ${medias[index]}`;
  } else {
    return 'não cadastrado';
  }
}


console.log(first, second, rest)


let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['stramberry', 'blueberry', 'rasperry'];

// fruits.push(berries);

// x = fruits[3][0];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object
x = Array.isArray(berries); // checa se é array

x = Array.from('12345'); // transforma string to array

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c)

console.log(x)

const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2);
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2);
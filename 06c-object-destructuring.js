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

 console.log(first, second, rest)


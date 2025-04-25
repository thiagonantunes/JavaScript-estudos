// Default Params
function registerUser(user = 'Bot') {
  return user + ' is registered'
}

// Rest Params
function sum (...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }
  return total;
}

function loginUser(user) {
  return `The user ${user.name} has the id ${user.id}`
}

const user = {
  id: 10,
  name: 'John'
}


function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y); // It`s possible to access the parent variable x
  }

  // console.log(y); // it's not possible to access const y
  
  second()
}

// Function Declaration
function addDolarSign(value) {
  return '$' + value;
}

// Fucntion Expression
const addPlusSing = function(value) {
  return '$' + value
};

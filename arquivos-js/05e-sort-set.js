const books = [
  { name: 'JavaScript', price: 25 },
  { name: 'PHP', price: 15 },
  { name: 'Java', price: 30 },
  { name: 'Elixir', price: 50 },
  { name: 'Go', price: 45 },
  { name: 'Python', price: 20 },
]

function nameSorted(array) {
  array.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
  return array
}

const priceSorted = books.sort((a, b) => a.price - b.price)

console.log(priceSorted);


//Set -> cria um novo array, eliminado elementos repetidos
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);
const listaNomesAtualizados = [...new Set(nomes)];


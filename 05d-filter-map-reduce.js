const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2009 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Filter
// Get only retail companies
const retailCompanies = companies.filter((company) => company.category === "Retail");

// Ger companies that started in or after 1980 and ended in or before 2005
const companiesYear = companies.filter((company) => company.start >= 1980 && company.end <= 2005);

// Map
const doubledNumbers = numbers.map((number) => number * 2)

// Create an array of companies names
const companiesName = companies.map((company) => {
  return {
    name: company.name,
    Category: company.category
  }
})

//Reduce
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 1', price: 150 },
  { id: 3, name: 'Product 3', price: 175 },
]

const totalCart = cart.reduce((acc, cur) => acc + cur.price, 0)

//Set -> cria um novo array, eliminado elementos repetidos
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);
const listaNomesAtualizados = [...new Set(nomes)];



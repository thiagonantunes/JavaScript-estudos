const post = require('./06d-estudantes.json')


//Convert to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

const chaves = Object.keys(obj)

function buscaInformacao(lista, chave, valor) {
  return lista.find((estudante) => estudante[chave].includes(valor)) || 'não cadastrado'
}


function filtraPorPropriedade(lista, prop) {
  return lista.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(prop)
  } )
}


function ordena(lista, prop ) {
  return lista.sort((a, b) => {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  })
}

console.log(buscaInformacao(post, 'nome', 'Olva'));
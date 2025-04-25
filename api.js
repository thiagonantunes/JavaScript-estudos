endPoint = 'https://www.filesampleshub.com/download/code/json/sample1.json'


let people = []

getPeopleFromApi()

async function getPeopleFromApi() {
  const res = await fetch(endPoint)
  people = await res.json()
  console.log(people.plural)
}

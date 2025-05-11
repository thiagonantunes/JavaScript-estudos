/*const livros = require('./test-livros.js');

let indiceLivroMaisBarato = 0;

for (let i = 0; i < livros.length; i++) {
  if (livros[i].preco < livros[indiceLivroMaisBarato].preco) {
    indiceLivroMaisBarato = i
  };
}

console.log(`Livro ${livros[indiceLivroMaisBarato].titulo} - $${livros[indiceLivroMaisBarato].preco}`);
console.log(indiceLivroMaisBarato);
*/

const nums = [3, 4, 5, 6] // target 9

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; i++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []
}

Input: strs = ["act", "pots", "tops", "cat", "stop", "hat"];

function groupAnagrams(arr) {
  let res = {};
  for (let s of strs) {
    const sorted = s.split('').sort().join('')
    if (!res[sorted]) {
      res[sorted] = []
    }
    res[sorted].push(s)
  }
  return Object.values(res)
}

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false
  }
  let sSort = s.split('').sort().join()
  let tSort = t.split('').sort().join()
  // return (`${sSort}  ${tSort}`)
  return (sSort === tSort)
}

s = "racecar"
t = "carrace"


const numbers = [1, 2, 2, 2, 3, 3, 3, 3, 3]

function topKFrequent(nums) {
  const res = {}
  for (let num of nums) {
    res[num] = (res[num] || 0) + 1
  }
  return Object.values(res).reverse()
}

console.log(topKFrequent(numbers));


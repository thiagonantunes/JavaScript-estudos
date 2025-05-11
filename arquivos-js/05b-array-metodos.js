const arr = [34, 55, 95, 20, 15];

arr.push(100); // adiciona na ultima posição

arr.pop() // retira da ultima posição

arr.unshift(99); // adiciona na primeira posição

arr.shift(); // retira da primeira posição

arr.reverse(); // inverte a posição dos itens

x = arr.includes(15); // verificar se item consta na lista

x = arr.indexOf(95); // verificar posição do item

x = arr.slice(1, 3); //novo array, primeiro indice, segundo até qual indice (exclusivo) | não altera o array original

x = arr.splice(1, 3) // novo array, primeiro indice, segundo até qual indice (inclusivo) | altera array original

x = arr.toString() // tranforma para string

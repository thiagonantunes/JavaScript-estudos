let x;

// Strings Properties and methods

const s = new String('Hello World'); // Object

x = typeof s;

x = s.length;

// Access value by key
x = s[0]

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0); // is the same as x = s[1]

x = s.indexOf('o')

x = s.substring(0, 4) // cortar a palavra pelo index

x = s.trim('     Hello World') // tira os espaços vazios

x = s.replace('World', 'Thiago') // Hello Thiago troca os valores

x = s.includes('World') // return true or false

x = s.valueOf()

x = s.split('') // dividir o elemento

console.log(x);

// Challenge

const x = 'developer' // Developer

s = x.substring(0, 1).toUpperCase() + x.substring(1)

console.log(s);
let x;

let d = new Date();

x = d.getFullYear();
x = d.getDate();
x = d.getHours();
x = d.toLocaleString('pt-BR')
x =`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZone: 'America/Sao_Paulo'
})


console.log(x);

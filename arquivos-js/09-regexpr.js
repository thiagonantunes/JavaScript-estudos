const str = 'Foo bar foo baz foo'

let x = str.replace(/foo/gi, 'show')

x = str.split(/foo/gi)

x = str.match(/foo/gi)

x = str.match(/abc/gi)

const email = 'thiago@hotmail.com'

//validar e-mail
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email)
}


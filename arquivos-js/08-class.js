class Personagem {
  #car
  constructor(nome, age, car) {
    this.nome = nome,
      this.age = age,
      this.#car = car
  }
  get car() {
    return this.#car
  }

  showName() {
    if (this.age > 30) {
      return this.age + ' - You are an old person';
    } else {
      return 'You are a young person'
    }
  }
}

class Boss extends Personagem {
  constructor(nome, age, car, vida) {
    super(nome, age, car);
    this.vida = vida
  }
}

const person = new Boss('thiago', 41, 'city', 80)

class Banco {
  constructor(agencia, conta, saldo) {
    this.agencia = agencia,
      this.conta = conta,
      this.saldo = saldo
  }

  sacar(valor) {
    if (valor > this.saldo) {
      return 'saldo insuficiente'
    } else {
      this.saldo -= valor
    }
  }

  depositar(valor) {
    this.saldo += valor
  }
}

class ContaBancaria {
  constructor(titular, numero, saldo) {
    this.titular = titular;
    this.numero = numero;
    this.saldo = saldo;
  }

  depositar(valor) {
    const soma = (this.saldo += valor);
    return soma;
  }

  sacar(valor) {
    if (this.saldo < valor) {
      throw new SaldoInsuficienteError(
        "Valor de saque maior do que o saldo da conta!",
      );
    }

    const subtrair = (this.saldo -= valor);
    return subtrair;
  }

  calcularRendimento() {
    return 0;
  }
}

class ContaPoupanca extends ContaBancaria {
  calcularRendimento() {
    const rendimento = this.saldo * 0.05;
    return rendimento;
  }
}

class SaldoInsuficienteError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "Saldo insuficiente";
  }
}

const pessoa1 = new ContaBancaria("Alisson", 1, 100);
const pessoa2 = new ContaPoupanca("Alane", 2, 300);

console.log(`Dados da conta:
  Titular: ${pessoa1.titular}
  Número da Conta: ${pessoa1.numero}
  Saldo: R$ ${pessoa1.saldo}`);

pessoa1.depositar(50);
console.log(pessoa1.saldo);

// pessoa1.sacar(200)
pessoa1.sacar(50);
console.log(pessoa1.saldo);

console.log(pessoa1.calcularRendimento());

console.log(`Dados da conta:
  Titular: ${pessoa2.titular}
  Número da Conta: ${pessoa2.numero}
  Saldo: R$ ${pessoa2.saldo}`);

console.log(pessoa2.calcularRendimento());

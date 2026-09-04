function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
  this.aplicarDesconto = function (percentual) {
    const desconto = this.preco * (percentual / 100);
    this.preco -= desconto;
    return `O novo valor a pagar é de R$ ${this.preco}`;
  };
  this.verificarDisponibilidade = function () {
    return this.estoque > 0
      ? "O produto está disponível!"
      : "O produto não está disponível!";
  };
}

const produto1 = new Produto("Paracetamol", 100, 20);

console.log(produto1);
console.log(produto1.aplicarDesconto(20));
console.log(produto1.verificarDisponibilidade())

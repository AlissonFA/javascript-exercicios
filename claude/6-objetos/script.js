// 1
const pessoa = {
  nome: "Alisson",
  idade: 19,
  cidade: "Aracaju",
  gato: {
    nome: "Luna",
  },
  saudacao: function () {
    return `Olá, me chamo ${this.nome}, tenho ${this.idade} anos e sou de ${this.cidade}`;
  },
};

console.log(pessoa.saudacao());

// 2
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.gato.nome);
console.log(pessoa.gato["nome"]);

// 3
pessoa.estado = "Sergipe";
console.log(pessoa.estado);

pessoa.nome = "Alane";
console.log(pessoa.nome);

// 4
console.log(pessoa.cachorro?.nome);

// 5
pessoa.cachorro ??= "Kiara";
console.log(pessoa.cachorro);

// 6
function Pessoa(nome, idade, cidade) {
  this.nome = nome;
  this.idade = idade;
  this.cidade = cidade;
  this.saudacao = function () {
    return `Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e moro em ${this.cidade}.`;
  };
}

const pessoa1 = new Pessoa("Alisson", 19, "Aracaju");
const pessoa2 = new Pessoa("Alane", 19, "Aracaju");

console.log(pessoa1, pessoa2)
console.log(pessoa1.saudacao())
console.log(pessoa2.saudacao())

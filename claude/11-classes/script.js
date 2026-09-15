// 1, 2, 3, 4
class Animal {
  constructor(nome, som) {
    this.nome = nome;
    this.som = som;
  }

  emitirSom() {
    console.log(this.som);
  }

  static quantidade() {
    console.log("Quantidade de animais");
  }
}

const animal = new Animal("Luna", "Miado");
console.log(animal);

animal.emitirSom();

Animal.quantidade();

// 5, 6
class Cachorro extends Animal {
  emitirSom() {
    console.log("Au! Au!");
  }
}

const cachorro = new Cachorro("Kiara", "Latido");
console.log(cachorro.nome);
cachorro.emitirSom();

// 7, 8
const endereco = {
  cidade: "Aracaju",
  estado: "Sergipe",
};

console.log(endereco);

// 8
try {
  Animal.dancar();
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Método não disponível");
  }
}

// 9
class ErroValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "Erro de validação";
  }
}

try {
  cachorro.nome = "";

  if (!cachorro.nome) {
    throw new ErroValidacao("O campo nome é obrigatório");
  }
} catch (error) {
  if (error instanceof ErroValidacao) {
    console.log(error.name, error.message);
  } else {
    console.log(error);
  }
}

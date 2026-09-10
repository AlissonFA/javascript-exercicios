// 1
// Avalia no começo
let x = 0;
while (x < 10) {
  x++;
  console.log(x);
}

// 2
// Executa pelo menos 1x, mesmo que seja falsa (avalia no final)
x = 0;
do {
  x++;
  console.log(x);
} while (x > 10);

// 3
const frutas = new Array("Maçã", "Banana", "Uva", "Morango", "Abacate");
for (let index = 0; index < frutas.length; index++) {
  const element = frutas[index];
  console.log(element);
}

// 4
// A variável é o numerador (posição)
const pessoa = {
  nome: "Alisson",
  idade: 19,
  email: "alisson@gmail.com",
};

for (let propriedade in pessoa) {
  console.log(pessoa[propriedade]);
}

// 5
// A própria variável se torna o valor do Array
for (let fruta of frutas) {
  console.log(fruta);
}

// 6
console.log("-------------------------------------");
for (let fruta of frutas) {
  if (fruta == "Uva") {
    break;
  }
  console.log(fruta);
}

// 7
// continue -> pula somente a iteração
for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

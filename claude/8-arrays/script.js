// 1
const frutas = new Array(
  "Maçã",
  "Banana",
  "Uva",
  "Melancia",
  "Morango",
  "Abacate",
  "Laranja",
);
const nomes = ["Alisson", "Alane", "Lucas"];

console.log(frutas);
console.log(nomes);

// 2
console.log(frutas[2]);

// 3
const frase =
  "No campo da tecnologia, a simplificação é sempre um grande avanço.";
console.log(frase.split(" "));

// 4
frutas.push("Melão"); // Adiciona ao final
console.log(frutas);

frutas.pop(); // Remove do final
console.log(frutas);

nomes.unshift("Alan"); // Adiciona ao início
console.log(nomes);

nomes.shift(); // Remove do início
console.log(nomes);

// 5
frutas[1] = "Melão";
console.log(frutas);

// 6
console.log(frutas.includes("Uva"));

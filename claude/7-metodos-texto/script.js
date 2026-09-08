// 1
let nome = "Alisson!";
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

// 2
let cidade = "Nossa Senhora do Socorro"; // Espaço conta
let estado = "Sergipe";

console.log(nome.length);
console.log(cidade.length);
console.log(estado.length);

// 3
const replaceNome = nome.replace("!", ".");
console.log(replaceNome);

const animais = ["Vaca", "Galinha", "Porco", "Ovelha", "Gato", "Cachorro", "Vaca"];
console.log(animais.slice(4, 5));
console.log(animais.slice(1));

// 4
const agente = "7";
console.log(agente.padStart(3, "0")); // O valor conta a partir do que já tem, por exemplo: na const agente já tem 1

const agente2 = "6";
console.log(agente2.padEnd(2, "7"));

// 5
const frase =
  "As tecnologias devem ser usadas para aumentar nossas capacidades, não para superá-las.";
const tech = frase.split(" "); // Se quiser pegar a palavra toda usa espaço
console.log(tech[1]);

const capacidade = frase.split(" ");
console.log(capacidade[8]);

const juncao = animais.join(", ");
console.log(juncao);

// 6

console.log(animais.includes("Porco"))
console.log(frase.includes("desenvolvedor"))

console.log(animais.indexOf("Ovelha"))
console.log(animais.indexOf("Vaca", 1)) // Dá pra definir de onde vai começar

const regex = /,/g
console.log(frase.search(regex))

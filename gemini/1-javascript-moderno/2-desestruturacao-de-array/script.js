// 1
const cores = ["Vermelho", "Verde", "Azul", "Amarelo"];

const [cor1, cor2] = cores;
console.log("Cor:", cor1);
console.log("Cor:", cor2);

// 2
const [vermelho, , azul] = cores;
console.log("Cor:", vermelho);
console.log("Cor:", azul);

// 3
let a = [5];
let b = [10];

let [valorA] = b;
let [valorB] = a;

console.log("Valor de A:", a);
console.log("Valor de B:", b);
console.log("Novo valor de A:", valorA);
console.log("Novo valor de B:", valorB);

// 4
const notas = [8.5];
const [nota1, nota2 = 0] = notas;
console.log(nota1);
console.log(nota2);

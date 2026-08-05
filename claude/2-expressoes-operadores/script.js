// 1
let n1 = 10;
let n2 = 5;

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;
let restoDivisao = n1 % n2;
let potenciacao = n1 ** n2;

console.log(soma, subtracao, multiplicacao, divisao, restoDivisao, potenciacao);

// 2
// Incrementa após
console.log(n1++);
console.log(n1);

// Incrementa antes
console.log(++n1);

// 3
console.log(4 + 8 * 5 - 5 / 5);

// 4
console.log((8 + 2) * 2 - 8 / 2);

// 5
// O sinal == verifica se são iguais sem considerar o tipo, já o sinal === verifica se são iguais considerando o tipo.
// EX: No sinal ==, 5 == "5" retornaria true. Já se trocar o sinal por === retornaria false.

// 6
let age1 = 19;
let age2 = 28;
let age3 = 19;

console.log("=== AGE 1 ===");
console.log(age1 > age2);
console.log(age1 > age3);

console.log("=== AGE 2 ===");
console.log(age2 > age1);
console.log(age2 > age3);

console.log("=== AGE 3 ===");
console.log(age3 > age1);
console.log(age3 > age2);

// 7
let count = 5;
count += 2;
console.log(count);
count -= 2;
console.log(count);
count *= 2;
console.log(count);
count /= 2;
console.log(count);

// 8
age1 = 18;
let carteiraMotorista = true;

if (age1 >= 18 && carteiraMotorista === true) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você não pode dirigir!");
}

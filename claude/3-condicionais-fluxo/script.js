// 1
let n1 = 4;

if (n1 % 2 === 0) {
  console.log("PAR");
} else {
  console.log("IMPAR");
}

// 2
console.log(n1 % 2 === 0 ? "PAR" : "IMPAR");

// 3
let falsy1 = "";
let falsy2 = 0;
let falsy3 = -0;
let falsy4 = false;
let falsy5 = null;
let falsy6;
let falsy7 = 5 + true;

let true1 = " ";
let true2 = 1;
let true3 = -1;
let true4 = true;
let true5 = {};
let true6 = [];
let true7 = Infinity;

console.log(
  falsy1 && falsy2 && falsy3 && falsy4 && falsy5 && falsy6 && falsy7
    ? "VERDADEIRO"
    : "FALSO",
);

console.log(
  true1 && true2 && true3 && true4 && true5 && true6 && true7
    ? "VERDADEIRO"
    : "FALSO",
);

// 4
let idade = 19;

if (idade <= 12) {
  console.log("CRIANÇA");
} else if (idade > 12 && idade < 18) {
  console.log("ADOLESCENTE");
} else if (idade >= 18 && idade < 60) {
  console.log("ADULTO");
} else {
  console.log("IDOSO");
}

// 5
switch (true) {
  case idade <= 12:
    console.log("CRIANÇA");
    break;
  case idade > 12 && idade < 18:
    console.log("ADOLESCENTE");
    break;
  case idade >= 18 && idade < 60:
    console.log("ADULTO");
    break;
  default:
    console.log("IDOSO");
    break;
}

// 6
let mes = 9;

switch (mes) {
  case 1:
    console.log("JANEIRO");
    break;
  case 2:
    console.log("FEVEREIRO");
    break;
  case 3:
    console.log("MARÇO");
    break;
  case 4:
    console.log("ABRIL");
    break;
  case 5:
    console.log("MAIO");
    break;
  case 6:
    console.log("JUNHO");
    break;
  case 7:
    console.log("JULHO");
    break;
  case 8:
    console.log("AGOSTO");
    break;
  case 9:
    console.log("SETEMBRO");
    break;
  case 10:
    console.log("OUTUBRO");
    break;
  case 11:
    console.log("NOVEMBRO");
    break;
  case 12:
    console.log("DEZEMBRO");
    break;
  default:
    console.log("### INSIRA UM VALOR ENTRE 1 E 12 ###");
    break;
}

// 7
try {
  let string;
  string.toUpperCase();
} catch (error) {
  console.log("Erro ao usar o método na variável!");
} finally {
  console.log("Undefined não pode receber toUpperCase!");
}

// PROJETO
let peso = 70;
let altura = 1.75;

try {
  if (typeof peso != "number" || typeof altura != "number") {
    throw new Error("Peso e altura devem ser números.");
  }

  let imc = peso / altura ** 2;

  if (imc < 18.5) {
    console.log("Abaixo do peso");
  } else if (imc < 25) {
    console.log("Peso normal");
  } else if (imc < 29.9) {
    console.log("Sobrepeso");
  } else if (imc < 34.9) {
    console.log("Obesidade grau 1");
  } else if (imc < 39.9) {
    console.log("Obesidade grau 2");
  } else {
    console.log("Obesidade grau 3");
  }
} catch (error) {
  console.log("Erro:", error.message)
} finally {
  console.log("Fim do projeto");
}

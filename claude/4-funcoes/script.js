// 1
function saudacao() {
  console.log("Olá, seja bem vindo!");
}

saudacao();

// 2
//6
/**
 * Soma dois valores.
 * @param {number} number1 - firstValue
 * @param {number} number2 - secondValue
 * @returns {number} Soma.
 */
function soma(number1, number2) {
  let operacao = number1 + number2;
  return operacao;
}

console.log(soma(5, 10));

// 3

let somar = function (number1, number2) {
  let operacao2 = number1 + number2;
  return operacao2;
};

console.log(somar(5, 2));

// 4
let somar2 = (number1, number2) => {
  let operacao3 = number1 + number2;
  return operacao3;
};

console.log(somar2(9, 1));

// 5
function joinText(text1, text2 = "", text3 = "") {
  let text = console.log(text1, text2, text3);
  return text;
}

console.log(joinText("Alisson"));

// 7
// dá erro de não definido
// operacao3 = n1 + n2;

// 8
function calcular(a, b, callback) {
  let soma = a + b;

  callback(soma);
}

console.log(calcular(3, 5, exibir));

function exibir(num) {
  console.log(`A operação resultou em: ${num}`);
}

// Projeto
let percentualDesconto = (preco, desconto = 0.1) => {
  let descobrirDesconto = preco * desconto;
  let valorFinal = preco - descobrirDesconto;

  return valorFinal;
};

console.log(percentualDesconto(200, 0.2));

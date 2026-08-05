// Bloco A
// 1
const nome = "Alisson";
let idade = 18;
let curso = "Análise e Desenvolvimento de Sistemas";

// 2
const pi = 3.14;

// 3
let userName = "Alisson";
userName = "Lucas";
userName = "Rodrigo";

// 4
let var1 = 4;
let var2 = 5;
var2 = var1;
var1 = var2;

// 5
let Variavelruim = "Lucas";
let _Variavel_pior = "Leandro";
let x1 = 18;
let x2 = 23;

let firstUser = "Lucas";
let secondUser = "Leandro";
let firstUserAge = 18;
let secondUserAge = 23;

// Bloco B
// 6
const texto = "string aqui";
const numero = 14;
const booleano = true;
let indefinido;
const nulo = null;

// 7
console.log(
  typeof texto,
  typeof numero,
  typeof booleano,
  typeof indefinido,
  typeof nulo,
);

// 8
console.log(numero / texto);
console.log(typeof NaN);

// 9
console.log(typeof Infinity);

// 10
function escreverNome() {
  console.log(nome);
}

console.log(typeof escreverNome);

// Bloco C
// 11
console.log(`Olá, meu nome é ${nome}! Eu tenho ${idade} e curso ${curso}.`);

// 12
console.log(`
  Olá
  Essa
  É
  Uma
  Mensagem
  `);

// 13
console.log(`Exibindo "aspas"`);
console.log('Exibindo "aspas"');

// 14
console.log(nome.toUpperCase());

// 15
console.log(nome.toLowerCase());

// 16
const numero2 = "50";
console.log(Number(numero2));

// 17
const texto2 = 300;
console.log(String(texto2));

// 18
console.log("10" + 5); // 105 (5 virou string)
console.log("10" - 5); // 5 (10 virou número)

// 19
console.log(true + true); // 2

// 20
console.log(null + 5); // 5

// Bloco E
// 21
console.log(
  `Olá, me chamo ${nome} e tenho ${idade} anos. Atualmente estou cursando ${curso}.`,
);

// 22
let frase = "Somente o Haki pode superar tudo.";
console.log(`
  Nome: ${nome}
  Idade: ${idade} anos
  Curso: ${curso}
  Frase: ${frase}
  `);

// 23
const nomeAluno = "Lucas";
let idadeAluno = 24;
let matriculado = true;
let bolsa = false;
console.log(
  `O aluno ${nomeAluno} de ${idadeAluno} anos está com a matricula: ${matriculado} e com bolsa: ${bolsa}. `,
);

// 24
const dataCompra = "08/05/2026";
const horaCompra = "16:35";
const nomeComprador = "Ryan";
const tipoCompra = "Notebook";
const marca = "Acer";
const modelo = "Nitro 5";
const valor = 5000;
console.log(
  `Olá, ${nomeComprador}! Você comprou um ${tipoCompra} da ${marca} no modelo ${modelo} por R$${valor} em ${dataCompra} as ${horaCompra}.`,
);

// 25
let vendas = 9473;
let estoque = 143;
let produto = "Geladeira Electrolux";
console.log(
  `O produto ${produto} obteve ${vendas} vendas e restam ${estoque} unidades no estoque.`,
);

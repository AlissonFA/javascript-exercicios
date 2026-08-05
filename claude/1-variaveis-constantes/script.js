// Atividade 1
var nome = "Alisson";
let idade = 18;
const estudante = true;

console.log(nome, idade, estudante);

// nome = "Lucas";
idade = 19;
// estudante = false;

console.log(nome, idade, estudante);

// Observação: var e const não podem ser reatribuídas, já let pode ser reatribuída.

// Atividade 2
{
  var escopo1 = "teste";
}

console.log(escopo1);

{
  let escopo2 = "teste";
}

// console.log(escopo2)

let escopo3 = "teste";
{
  escopo3 = "testado";
}

console.log(escopo3);

// Observação: Var tem escopo global, já let tem escopo local ou hierárquico.

// Atividade 3
pessoa("Alisson");
function pessoa(nome) {
  console.log(nome);
}

// console.log(person);
let person = "Lucas";

// Observação: A função pode ser chamada antes da declaração, já o let não pode.

// Atividade 4
// Ruim porque pode ser qualquer coisa.
const x = "Alisson";

// Ruim porque pode ser qualquer coisa.
const n1 = 18;

// Ruim porque está em português (padrão é inglês) e pelo caractere especial.
const pessoa_estudante = true;

// Ruim porque começa com caractere especial e tem caractere especial no meio.
const _nome_professor = "Lucas";

// Ruim porque começa com letra maiúscula, tem acento e está em português.
const Ação = "andar";

// Reescrevendo
const userName = "Alisson";
const userAge = 18;
const userStudent = true;
const TeacherName = "Lucas";
const action = "andar";

// Atividade 5
let texto = "texto aqui";
let numero = 18;
let booleano = true;
let indefinido;
let nulo = null;

console.log(
  typeof texto,
  typeof numero,
  typeof booleano,
  typeof indefinido,
  typeof nulo,
);

// O typeof de null mostra objeto por conta de um erro antigo, que até hoje não foi corrigido por questões de compatibilidade.

// Atividade 6
console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);

// Atividade 7
console.log(typeof ("7" + 5));
console.log(typeof ("7" - 5));
console.log(typeof (true + 1));
console.log(typeof (true - 1));
console.log(typeof (false + 5));

// Observação: Entre uma soma de string e number aparentemente quem prevalece é string.
// Entre uma subtração de string e number aparentemente quem prevalece é number.
// Entre boolean e number aparentemente quem prevalece é number.

// Atividade 8
let numero2 = "18";
let nome2 = 19;
let booleano2 = 0;

console.log(typeof Number(numero2));
console.log(typeof String(nome2));
console.log(typeof Boolean(booleano2));

// Mini projeto - Cartão de Apresentação
const name2 = "Alisson";
let age = 18;
let occupation = "estudante";
let phrase = "Somente o Haki pode superar tudo.";

console.log(
  `Olá, meu nome é ${name2}! Eu tenho ${age} anos e atualmente sou ${occupation}. A minha frase favorita é: ${phrase}`,
);

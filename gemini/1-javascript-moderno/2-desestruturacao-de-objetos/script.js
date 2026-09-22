// 1
const usuario = {
  nome: "Ana Silva",
  idade: 28,
  cidade: "São Paulo",
  profissao: "Desenvolvedora",
};

const { nome, profissao } = usuario;
console.log(`Olá, me chamo ${nome} e sou ${profissao}.`);

// 2
const { cidade: localidade } = usuario;
console.log(localidade);

// 3
const configuracoes = {
  tema: "escuro",
  notificacoes: {
    email: true,
    // som: true,
  },
};

const {
  tema,
  notificacoes: { email, som = false },
} = configuracoes;

console.log(tema);
console.log(email);
console.log(som);

// 4
function apresentarPessoa({ nome, idade }) {
  console.log("### APRESENTAÇÃO ###");
  console.log(`Olá, me chamo ${nome} e tenho ${idade} anos.`);
}

apresentarPessoa({ idade: 18, nome: "Alisson" }); // Pode passar em qualquer ordem que quiser.

// 1
let dataAtual = new Date();
console.log(dataAtual);

// 2
let dataPrecisa = new Date(2026, 8, 6);
console.log(dataPrecisa);

// 3
let ano = new Date().getFullYear();
let mes = new Date().getMonth();
let diaMes = new Date().getDate();
let diaSemana = new Date().getDay();

console.log(diaSemana, diaMes, mes, ano);

// 4
dataPrecisa.setDate(24);
dataPrecisa.setMonth(9);
console.log(dataPrecisa);

// 5
console.log(`${diaMes}/${mes}/${ano}`);

// 6
console.log(typeof dataPrecisa);
console.log(typeof dataPrecisa.toString());
console.log(typeof dataPrecisa.toISOString());
console.log(dataPrecisa.toString()); // Com formatação
console.log(dataPrecisa.toISOString()); // Sem formatação

// 7
console.log(dataAtual.toLocaleDateString()); // Padrão nacional sem hora

// 8
console.log(dataAtual.toLocaleString()); // Padrão nacional com hora

// 9
const valor = 1630.2;
const formatador = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

console.log(formatador.format(valor))

// 10
let dataFusoDiferente = new Date("2026-09-07T08:59:12+04:00")
console.log(dataFusoDiferente)
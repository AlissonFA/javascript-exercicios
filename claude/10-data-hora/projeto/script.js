function calcularIdade(dataNascimento) {
  const data = new Date();
  const nascimento = new Date(dataNascimento);

  let idade = data.getFullYear() - nascimento.getFullYear();
  let mes = data.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && data.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

console.log(calcularIdade("2007-09-06"));

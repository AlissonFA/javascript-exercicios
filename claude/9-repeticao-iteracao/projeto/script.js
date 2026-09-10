function valores(numeros) {
  const resultado = {
    pares: [],
    impares: [],
    total: 0,
  };

  for (let numero of numeros) {
    resultado["total"] += numero;

    if (numero % 2 == 0) {
      resultado["pares"].push(numero);
    } else {
      resultado["impares"].push(numero);
    }
  }

  return resultado;
}

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const meuResultado = valores(meuArray);

console.log(meuResultado);

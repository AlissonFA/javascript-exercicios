function formatarTitulo(frase) {
  const minusculo = frase.toLowerCase();

  const separar = minusculo.split(" ");

  const formatacao = separar.map((palavra) => {
    const primeiraMaiuscula = palavra[0].toUpperCase();
    const complemento = palavra.slice(1);
    const palavraCompleta = primeiraMaiuscula + complemento;
    return palavraCompleta;
  });

  const juncao = formatacao.join(" ");

  return juncao
}

const frase1 = formatarTitulo(
  "As tecnologias devem ser usadas para aumentar nossas capacidades, não para superá-las.",
);

console.log(frase1)

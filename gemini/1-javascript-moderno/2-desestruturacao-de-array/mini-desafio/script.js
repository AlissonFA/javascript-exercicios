const tabuleiro = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"],
];

const [, [, central]] = tabuleiro; // Pula a primeira linha, no segundo array pula o primeiro elemento e pega o segundo.
console.log(central);

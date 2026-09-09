const compras = [
  {
    item: "Banana",
    quantidade: 1,
    comprado: true,
  },
];

function adicionarCompras(item, quantidade, comprado) {
  const adicionarProduto = compras.push({
    item: item,
    quantidade: quantidade,
    comprado: comprado,
  });

  return adicionarProduto;
}

adicionarCompras("Maçã", 10, true);
console.log(compras);

function removerCompras() {
  const removerProduto = compras.pop();

  return removerProduto;
}

removerCompras();
console.log(compras);

function marcarComprado(produto, valor) {
  compras[produto].comprado = valor;
}

// marcarComprado(0, false)

adicionarCompras("Melancia", 3, false);
marcarComprado(1, true);

console.log(compras);

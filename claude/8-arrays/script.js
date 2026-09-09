// 1
const frutas = new Array("Maça", "Banana", "Uva", "Melancia", "Morango", "Abacate", "Laranja");
const nomes = ["Alisson", "Alane", "Lucas"];

console.log(frutas)
console.log(nomes)

// 2
console.log(frutas[2])

// 3
const frase = "No campo da tecnologia, a simplificação é sempre um grande avanço."
console.log(frase.split(" "))

// 4
frutas.push("Melão")
console.log(frutas)

frutas.pop()
console.log(frutas)

nomes.unshift("Alan")
console.log(nomes)

nomes.shift()
console.log(nomes)

// 5
frutas[1] = "Melão"
console.log(frutas)

// 6
console.log(frutas.includes("Uva"))
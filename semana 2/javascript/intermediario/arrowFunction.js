// Operador Ternário 
let idade = 18

function maiorDeIdade(idade) {
  return idade >= 18 ? 'Maior de Idade' : 'Menor de Idade'
}

let x = 2
let y = 8

// Função Anônima
const soma = function (x, y) {
  return x + y
}

// Arrow Function 
soma1 = (x, y) => x + y

soma2 = (x, y) => {
  return x + y
}

console.log(soma2(x, y))
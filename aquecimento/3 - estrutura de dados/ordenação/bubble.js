/*
  Estrutura de Dados: Ordenação - BubbleSort
*/

let valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function ordenar() {
  let inicio = 0
  let fim = valores.length
  let temp

  for (let i = inicio; i < fim; i++) {
    for (let j = inicio; j < fim - 1 - i; j++) {
      if (valores[j] > valores[j + 1]) {
        temp = valores[j]
        valores[j] = valores[j + 1]
        valores[j + 1] = temp
      }
    }
  }
}

console.log("Vetor desordenado...")
console.log(valores)

ordenar()

console.log("Vetor ordenado...")
console.log(valores)
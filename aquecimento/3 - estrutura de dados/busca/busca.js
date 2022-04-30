/*
  Estrutura de Dados: Busca de elementos

  
*/

let valores = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// Busca Sequencial
function buscaSequencial(valor) {
  for (let i = 0; i < valores.length; i++) {
    if (valor == valores[i]) {
      return i
    }
  }
  return -1
}
console.log(buscaSequencial(9))

// Ordenando Lista (Exigência)
valores = valores.sort()

// Busca Binária
function buscaBinaria(numero) {
  let inicio, fim, meio
  inicio = 0
  fim = valores.length

  while (inicio <= fim) {
    meio = parseInt((inicio + fim) / 2)

    if (numero == valores[meio]) {
      return meio
    } else if (numero > valores[meio]) {
      inicio = meio + 1
    } else {
      fim = meio - 1
    }
  }
  return -1
}
console.log(buscaBinaria(9))






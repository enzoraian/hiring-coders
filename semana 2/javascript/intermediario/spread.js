let lista = [1, 2, 5]
let listaIncluir = [3, 4]

// Algoritmo de inclusão
for (let i = 0; i < listaIncluir.length; i++) {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] >= listaIncluir[i]) {
      lista.splice(j, 0, listaIncluir[i])
      j++
    }
  }
}
console.log(lista)

// Spread 
let novaLista = [1, 2, ...listaIncluir, 5]
console.log('Spread: ' + novaLista)

let arr = ['a', 'b', 'c']

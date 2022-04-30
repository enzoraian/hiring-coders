/* 
  Estrutura de Dados: Pilha
  LIFO(last-in first-out)
  Último a entrar, Primeiro a Sair

  -> Pode ser utilizada no controle de estoque, para vender lotes de diferentes valores.
  -> Conversão de decimal para binário
*/

const TAMANHO_MAXIMO = 10
let elementos = [TAMANHO_MAXIMO]
let topo = -1

// Método Adicionar
function adicionar(elemento){
  if (topo < TAMANHO_MAXIMO){
    topo++
    elementos[topo] = elemento
    console.log("Elemento adicinado ")
  }else{
    console.log("Pilha está cheia")
  }
}

// Método Remover
function remover(){
  if (topo != -1){
    let elemento = elementos[topo]
    topo--
    return elemento
  }else{
    console.log("Pilha está vazia")
  }
}

function estaVazia(){
  return topo == -1
}

// ---> Utilização da Pilha <--- //

//  Está vazia (?)
console.log(estaVazia())

// Adicionando...
adicionar(10)
adicionar(20)
adicionar(30)
console.log(elementos)

// Removendo... 
console.log(remover())

//  Está vazia (?)
console.log(estaVazia())


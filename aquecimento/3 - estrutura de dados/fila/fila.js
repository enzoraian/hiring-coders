/*
  Estrutura de Dados: Fila
  FIFO(first-in first-out)
  Primeiro a entrar, Primeiro a sair
  
  -> Pode ser utilizado para fila de atendimento no banco, fila de prioridade, pedidos de pizzaria.
 */

// Lista de Clientes
let clientes = []

function pegarSenha(senha){
  clientes[clientes.length] = senha
}

function chamarSenha(){
  if (clientes.length > 0){
    let clienteDaVez = clientes[0]
    clientes.splice(0,1)
    return clienteDaVez
  }else{
    console.log("Não existe clientes na fila")
  }
}

// -> Utilizando a Fila <- //

// Clientes pegando senha...
pegarSenha(1)
pegarSenha(2)
pegarSenha(3)

// Chamando senhas...
console.log(chamarSenha())
console.log(chamarSenha())
console.log(chamarSenha())
console.log(chamarSenha())












const pessoa = {
  nome: 'Enzo',
  sobrenome: 'Raian',
  idade: 23,
  profissao: 'Programador',
}

// let nome = pessoa.nome
// let sobrenome = pessoa.sobrenome
// let idade = pessoa.idade
// let profissao = pessoa.profissao


let { nome, sobrenome, idade, profissao } = pessoa

console.log(nome, sobrenome, idade, profissao)

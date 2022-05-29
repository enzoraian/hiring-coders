
function validaCpf(cpf) {
  if (cpf.length != 11) {
    return false
  } else {
    var numeros = cpf.substring(0, 9)
    var digitos = cpf.substring(9)

    // Validando primeiro dígito...
    var soma = 0
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i
    }
    console.log(soma)

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
    if (resultado != digitos.charAt(0)) {
      console.log('entrou')
      return false
    }

    // Validando segundo dígito...
    soma = 0
    numeros = cpf.substring(0, 10)

    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k
    }
    console.log(soma)

    resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11)
    if (resultado != digitos.charAt(1)) {
      console.log('entrou aqui')
      return false
    }

    return true
  }

}

function validacao() {
  console.log('Iniciando validação de cpf...')

  var cpfDigitado = document.getElementById('cpf_digitado').value
  var resultadoValidacao = validaCpf(cpfDigitado)

  if (resultadoValidacao) {
    document.getElementById('success').style.display = 'block'
  } else {
    document.getElementById('error').style.display = 'block'
  }
}


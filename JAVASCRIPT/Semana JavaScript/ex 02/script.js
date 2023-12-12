const nameOlder = prompt('Informe o NOME da pessoa mais VELHA:')
const idOlder = Number(prompt('Informe a IDADE de ' + nameOlder + ':'))
const nameYounger = prompt('Informe o NOME da pessoa mais NOVA:')
const idYounger = Number(prompt('Informe a IDADE de ' + nameYounger + ':'))
const diferenca = idOlder - idYounger

alert('A diferença de idade é de ' + diferenca + ' anos' +
      '\n\nA pessoa mais VELHA é : ' + nameOlder + ' e tem ' + idOlder + ' anos.' +
      '\nA pessoa mais NOVA é : ' + nameYounger + ' e tem ' + idYounger + ' anos.')
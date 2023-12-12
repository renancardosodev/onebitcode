alert('Bem-vindo! A seguir pediremos que informe alguns dados.')
const nome = prompt('Informe o seu nome:')
let idade = prompt('Informe a sua idade: ')

while(true){
    let confirmacao = confirm('Você tem ' + idade +  ' anos?')

    if (confirmacao){
        break
    }else{
        idade = prompt('Digite novamente sua idade:')
    }
}

alert('Seu nome é: ' + nome +
      '\nSua idade é: ' + idade + ' anos')
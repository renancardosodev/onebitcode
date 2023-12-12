const nomeNave = prompt('Qual o nome da nave?')
let opcao = prompt('Você deseja entrar na Dobra Espacial?' + '\n\n1- SIM  |  2- NÃO')
let dobras = 0

while(opcao !== '2'){
    switch (opcao){
        case '1':
            dobras ++
            opcao = prompt('Deseja realizar outra dobra?' + '\n\n1- SIM  |  2- NÃO')
            break
        case '2':
            break
        default:
            alert('Opção inválida!')
    }
}

alert('Alô tripulantes! A nave ' + nomeNave + ' realizou ' + dobras + ' dobra(s)!')
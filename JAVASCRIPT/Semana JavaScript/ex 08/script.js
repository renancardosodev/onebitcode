function imprimirDados(velocidade, nomeNave){
    alert('A nave ' + nomeNave + ' está a ' + velocidade + 'km/h')
}

function desacelerar(velocidade){
    if (velocidade > 0){
        return velocidade -= 5
    }else {
        alert('Você está parado! Sua velocidade é 0')
        return 0
    }
}

function acelerar(velocidade){
    return velocidade += 5
}

function validarOpcao(opcao, velocidade, nomeNave){
    switch (opcao){
        case '1':
            return velocidade = acelerar(velocidade)
        case '2':
            return velocidade = desacelerar(velocidade)
        case '3':
            imprimirDados(velocidade, nomeNave)
            break
        case '4':
            break
        default:
            alert('Essa opção não existe')
    }
}

function exibirMenu(nomeNave){
    let velocidade = 0
    let opcao = ''

    do{
        opcao = prompt(
            '----------- MENU -----------\n' +
            '\n1 - Acelerar em 5km/h' +
            '\n2 - Desacelerar em 5km/h' +
            '\n3 - Imprimir dados de bordo' +
            '\n4 - SAIR')

        velocidade = validarOpcao(opcao, velocidade, nomeNave)
    }while(opcao !== '4')
}


const nomeNave = prompt('Qual o nome da nave?')

exibirMenu(nomeNave)
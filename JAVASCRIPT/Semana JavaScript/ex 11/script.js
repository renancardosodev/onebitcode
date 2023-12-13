function imprimir (velocidade, nave){
    alert('Dados da Nave:\n' +
          '\nNome: ' + nave.nome +
          '\nTipo: ' + nave.tipo +
          '\nVelocidade Máxima: ' + nave.velocidadeMaxima + 'km/h' +
          '\n Velocidade Atual: ' + velocidade + 'km/h')
}

function acelerar (velocidade, nave){
    let aceleracao = Number(prompt('Informe o quanto quer acelerar:'))

    if ((velocidade + aceleracao) > nave.velocidadeMaxima) {
        alert('Essa aceleração ultrapassa a velocidade máxima. Escolha outra aceleração')
    }else {
        velocidade += aceleracao 
        alert('A atual velocidade é de: ' + velocidade + 'km/h')
    }
    return velocidade
}

function parar (velocidade){
    if (velocidade == 0) {
        alert('A nave já está parada!')
    }else{
        alert('Parando nave agora!')
    }
    return 0
}

function executarOpcao (opcao, velocidade, nave){
    switch (opcao) {
        case '1':
            return parar(velocidade)
        case '2':
            return acelerar(velocidade, nave)
        case '3':
            return velocidade
        default:
            alert('Opção invalida!')
            return velocidade
    }
}

function menu (velocidade, nave){
    let opcao = ''
 
    do{
        opcao = prompt('------ MENU ------\n' +
                       '\n1 - PARAR' +
                       '\n2 - ACELERAR' +
                       '\n3 - SAIR')

        velocidade = executarOpcao(opcao, velocidade, nave)
    }while(opcao != '3')
    return velocidade
}

function perguntas (nave){
    nave.nome = prompt('Informe o nome da nave:')
    nave.tipo = prompt('Informe o tipo da nave:')
    nave.velocidadeMaxima = Number(prompt('Informe a velocidade máxima:'))
}

const nave = {}
let velocidade = 0

perguntas(nave)

velocidade = menu(velocidade, nave)

imprimir(velocidade, nave)




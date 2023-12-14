const cartas = []
let nomeCarta = ''
let resposta = ''

do{
    resposta = prompt(cartas.join('\n') +
                      '\n\nEscolha uma opção:\n\n' +
                      '1 - Adicionar uma carta   |   2 - Puxar uma carta   |   3 - Sair')

    switch (resposta){
        case '1':
            nomeCarta = prompt('Qual o nome da carta?')
            cartas.unshift(nomeCarta)
            break
        case '2':
            nomeCarta = cartas.shift()
            if (nomeCarta === undefined){
                alert('Não há cartas')
            }else{
                alert('A carta retirada foi: ' + nomeCarta)
            }
            break
        case '3':
            break
        default:
            break
    }
}while (resposta !== '3')

let dinheiroDisponivel = parseFloat(prompt('Qual a quantidade de dinheiro disponível:'))
let aplicarResgatar = 0
let escolha

do{
    escolha = Number(prompt('Você tem R$' + dinheiroDisponivel.toFixed(2) + '. O que deseja fazer?\n\n' +
    '1 - Aplicar\n' +
    '2 - Resgatar\n' +
    '3 - Sair'))

    switch (escolha){
        case 1:
            aplicarResgatar = parseFloat(prompt('Qual a quantidade a ser Aplicada'))
            dinheiroDisponivel += aplicarResgatar
            break
        case 2:
            aplicarResgatar = parseFloat(prompt('Qual a quantidade a ser Resgatada?'))
            dinheiroDisponivel -= aplicarResgatar
            break
        case 3:
            break
        default:
            alert('Essa opção não existe')
    }
}while(escolha != 3)

alert('Você tem R$' + dinheiroDisponivel.toFixed(2) + ' disponível')
alert('Programa encerrado')

alert('Bem-vindo ao conversor de Anos-luz')
const anosLuz = Number(prompt('Informe o valor em Anos-luz:'))
let opcao = ''
let conversao = 0

do{
    opcao = prompt('Para qual medida você quer converter?\n' +
                     '\n1 - Parsec (pc)' +
                     '\n2 - Unidade astronômica (AU)' +
                     '\n3 - Quilômetros (km)' +
                     '\n4 - SAIR')

    switch (opcao){
        case '1':
            conversao = anosLuz * 0.306601

            alert('A distância em Anos-luz: ' + anosLuz + 'l.y' +
                  '\nA distãncia convertida para Parsec é: ' + conversao.toFixed(6) + 'pc')
            break

        case '2':
            conversao = anosLuz * 63241.1
            
            alert('A distância em Anos-luz: ' + anosLuz + 'l.y' +
            '\nA distãncia convertida para Unidade astronômica é: ' + conversao.toFixed(2) + 'AU')
            break

        case '3':
            conversao = anosLuz * (9.5 * Math.pow(10,12))

            alert('A distância em Anos-luz: ' + anosLuz + 'l.y' +
            '\nA distãncia convertida para Quilômetros é: ' + conversao.toFixed(2) + 'km')
            break

        case '4':
            break

        default:
            alert('Essa opção não existe. Tente outra vez.')
    }
}while (opcao !== '4')


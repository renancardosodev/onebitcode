let menu

do {
    menu = Number(prompt('MENU\n\n' +
    '1 - Opção 1\n' +
    '2 - Opção 2\n' +
    '3 - Opção 3\n' +
    '4 - Opção 4\n' +
    '5 - Encerrar'))

    switch (menu){
        case 1:
            alert('Opção 1')
            break
        case 2:
            alert('Opção 2')
            break
        case 3:
            alert('Opção 3')
            break
        case 4:
            alert('Opção 4')
            break
        case 5:
            break
        default:
            alert('Essa opção não existe')
    }
}while (menu != 5)

alert('Programa encerrado')
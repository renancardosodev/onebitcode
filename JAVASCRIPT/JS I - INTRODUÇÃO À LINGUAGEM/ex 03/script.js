const metros = prompt('Informe a medida em metros:')
const unidade = Number(prompt('Informe para qual unidade você quer converter: \n\n' +
    '1 - milímetro (mm)\n' +
    '2 - centímetro (cm)\n' +
    '3 - decímetro (dm)\n' +
    '4 - decâmetro (dam)\n' +
    '5 - hectômetro (hm)\n' +
    '6 - quilômetro (km)'))

switch (unidade){
    case 1:
        alert(metros + ' = ' + metros * 1000 + 'mm')
        break
    case 2:
        alert(metros + ' = ' + metros * 100 + 'cm')
        break
    case 3:
        alert(metros + ' = ' + metros * 10 + 'dm')
        break
    case 4:
        alert(metros + ' = ' + metros / 10 + 'dam')
        break
    case 5:
        alert(metros + ' = ' + metros / 100 + 'hm')
        break
    case 6:
        alert(metros + ' = ' + metros / 1000 + 'km')
        break
    default:
        alert('Não é uma unidade de medida válida! Tente outra vez.')
}
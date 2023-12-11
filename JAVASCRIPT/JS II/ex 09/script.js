function triangulo () {
    const base = prompt('Informe o valor da base do triângulo:')
    const altura = prompt('Informe o valor da altura do triângulo:')
    return (base * altura)/2
}

function retangulo () {
    const base = prompt('Informe o valor da base do retangulo:')
    const altura = prompt('Informe o valor da altura do retangulo:')
    return base * altura
}

function quadrado () {
    const lado = prompt('Informe o valor do lado do quadrado:')
    return lado*lado
}

function trapezio () {
    const baseMenor = prompt('Informe o valor da base menor do trapézio:')
    const baseMaior = prompt('Informe o valor da base maior do trapézio:')
    const altura = prompt('Informe o valor da altura do trapézio:')

    return (baseMenor * baseMaior) * altura/2
}

function circulo () {
    const raio = prompt('Informe o valor do raio do círculo:')
    return 3.14 * raio*raio
}

let opcao = ''
const resultado = 0

do{
    opcao = prompt(
    'Escolha dentre as opções a baixo: \n\n' +
    '1 - Triângulo\n' +
    '2 - Retângulo\n' +
    '3 - Quadrado\n' +
    '4 - Trapézio\n' +
    '5 - Circulo\n' +
    '6 - Sair'
    )

    switch (opcao){
        case '1':
            alert(`O resultado da área do triângulo é: ${triangulo()}`)
            break
        case '2':
            alert(`O resultado da área do retângulo é: ${retangulo()}`)
            break
        case '3':
            alert(`O resultado da área do quadrado é: ${quadrado()}`)
            break
        case '4':
            alert(`O resultado da área do trapézio é: ${trapezio()}`)
            break
        case '5':
            alert(`O resultado da área do circulo é: ${circulo().toFixed(2)}`)
            break
        case '6':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida, tente novamente!')
    }
}while(opcao !== '6')



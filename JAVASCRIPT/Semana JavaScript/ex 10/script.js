const hitchedSpaceships = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]

const tripulantes = hitchedSpaceships.filter(e => e[1] > 9).map(e => e[0]).join(', ')

let faltandoEngatar = hitchedSpaceships.findIndex(e => e[2] === false)
faltandoEngatar++

const nomeNaves = hitchedSpaceships.map(e => e[0].toUpperCase()).join('\n')
console.log(nomeNaves)
alert('------- NAVES -------\n\n' + nomeNaves +
    '\n\nA nave na plataforma ' + faltandoEngatar + ' ainda esta com engate pendente' +
    '\n\nEssas naves têm mais de 9 tripulantes: ' + tripulantes)

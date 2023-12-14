let cidades = []
const nome = prompt('Olá! Qual o seu nome?')
let pergunta = prompt('Já visitou alguma cidade? (sim/não)')
let x = 0

if (pergunta === 'sim') {
    while (pergunta === 'sim'){
        cidades[x] = prompt('Qual cidade você já visitou')
        x++
        pergunta = prompt('Você visitou mais alguma cidade? (sim/não)')
    }

    alert(nome + ', segue todas as cidades que você já foi:\n\n' + cidades)

} else {
    alert('Que pena, quem sabe em breve.')
}
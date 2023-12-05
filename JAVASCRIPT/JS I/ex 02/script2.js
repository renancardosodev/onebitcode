//-------------------------- VARIÁVEIS --------------------------
const nameATK = prompt('Informe o nome do perdonagem de ataque:')
const powerATK = Number(prompt(`Informe o poder do ${nameATK}:`))

const nameDEF = prompt('Informe o nome do personagem de defesa:')
const powerDEF = Number(prompt(`Informe o poder do ${nameDEF}:`))
let HP = Number(prompt(`Informe a quantidade de vida do ${nameDEF}:`))
const shield = prompt(`O ${nameDEF} possui escudo: (sim/não) `)

let damage = 0

//-------------------------- BODY --------------------------
if (powerATK > powerDEF && shield == 'sim') {
    damage = (powerATK - powerDEF)/2
}else if (powerATK > powerDEF && shield == 'não') {
    damage = powerATK - powerDEF
}

HP -= damage

//-------------------------- MENSAGEM --------------------------
alert (`${nameDEF} sofreu ${damage} de dano`)

alert('Resultado Final:\n\n' +
        `${nameATK}\n` +
        `Ataque: ${powerATK}\n\n` +
        `${nameDEF}\n`+
        `Defesa: ${powerDEF}\n` +
        `Vida: ${HP}\n` +
        `Escudo: ${shield}`);
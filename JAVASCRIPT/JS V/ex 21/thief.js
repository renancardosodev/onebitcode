const Character = require("./character.js")

class Thief extends Character {
    attack(alvo){
        alvo.hp -= (this.atk - alvo.def) *2
        alvo.hp <= 0 ? console.log(`${alvo.name} está morto!`): console.log(`${alvo.name} tem ${alvo.hp} de vida.`)
    }
}

module.exports = Thief
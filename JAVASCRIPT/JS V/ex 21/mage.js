const Character = require("./character.js")

class Mage extends Character {
    constructor(name, hp, atk, def, magic) {
        super(name, hp, atk, def)
        this.magic = magic
    }

    attack(alvo) {
        alvo.hp -= (this.atk + this.magic) - alvo.def
        alvo.hp <= 0 ? console.log(`${alvo.name} está morto!`): console.log(`${alvo.name} tem ${alvo.hp} de vida.`)
    }

    saveHp(alvo) {
        alvo.hp += 2*(this.magic)
    }
}

module.exports = Mage
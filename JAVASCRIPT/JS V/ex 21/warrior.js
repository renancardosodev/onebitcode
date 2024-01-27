const Character = require("./character.js")

class Warrior extends Character {
    constructor(shield, position, name, hp, atk, def) {
        super(name, hp, atk, def)
        this.shield = shield
        this.position = position
        this.defesa()
    }

    attack(alvo) {
        if(this.position === 'atacar'){
            super.def = 
            alvo.hp -= super.atk - alvo.def
            alvo.hp <= 0 ? console.log(`${alvo.name} está morto!`): console.log(`${alvo.name} tem ${alvo.hp} de vida.`)
        }else {
            console.log(`${super.name} não consegue atacar, pois ela está no posição de defesa.`)
        }
    }

    defesa() {
        if(this.position === 'defesa') {
            super.def += this.shield
        }
    }

    changePosition(position) {
        this.position = position
        this.defesa()
    }   
}

module.exports = Warrior
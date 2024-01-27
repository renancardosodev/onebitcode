const Character = require("./character.js")

class Warrior extends Character {
    constructor(name, hp, atk, def, shield) {
        super(name, hp, atk, def)
        this.shield = shield
        this.position = 'atacar'
    }

    attack(alvo) {
        if(this.position === 'atacar'){
           super.attack(alvo)
        }else {
            console.log(`${this.name} não consegue atacar, pois ela está no posição de defesa.`)
        }
    }

    changePosition() {
        if(this.position === 'defender') {
            this.position = 'atacar'
            this.def += this.shield
        }else {
            this.position = 'defender'
            this.def -= this.shield
        }
    }   
}

module.exports = Warrior
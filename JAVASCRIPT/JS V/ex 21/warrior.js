import { Character } from "./character.js";

export class Warrior extends Character {
    constructor(shield, position) {
        this.shield = shield
        this.position = position
        this.defesa()
    }

    attack(alvo) {
        if(this.position === 'atacar'){
            super.def = 
            alvo.hp = alvo.def - 2*(super.atk + this.magic)
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
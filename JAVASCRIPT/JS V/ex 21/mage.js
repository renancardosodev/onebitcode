import { Character } from "./character.js";

export class Mage extends Character {
    constructor(magic) {
        this.magic = magic
    }
    attack(alvo){
        alvo.hp = alvo.def - 2*(super.atk + this.magic)
        alvo.hp <= 0 ? console.log(`${alvo.name} está morto!`): console.log(`${alvo.name} tem ${alvo.hp} de vida.`)
    }
}
import { Character } from "./character.js";

export class Thief extends Character {
    attack(alvo){
        alvo.hp = alvo.def - 2*(super.atk)
        alvo.hp <= 0 ? console.log(`${alvo.name} está morto!`): console.log(`${alvo.name} tem ${alvo.hp} de vida.`)
    }
}
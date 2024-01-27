export class Character {
    constructor(name, hp, atk, def){
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
    }
    attack(alvo){
        alvo.hp = alvo.def - this.atk
        alvo.hp <= 0 ? console.log(`${alvo.name} está morto!`): console.log(`${alvo.name} tem ${alvo.hp} de vida.`)
    }
}
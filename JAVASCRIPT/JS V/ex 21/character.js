class Character {
    constructor(name, hp, atk, def){
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
    }
    attack(alvo){
        alvo.hp -= this.atk - alvo.def
        alvo.hp <= 0 ? console.log(`${alvo.name} está morto!`): console.log(`${alvo.name} tem ${alvo.hp} de vida.`)
    }
}

module.exports = Character
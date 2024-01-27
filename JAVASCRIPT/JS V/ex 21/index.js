const Mage = require("./mage.js")
const Thief = require("./thief.js")
const Warrior = require("./warrior.js")


const personagem1 = new Mage('Escudeiro', 1000, 100, 20, 20)
const personagem2 = new Thief('Ninja', 2000, 200, 20)
const personagem3 = new Warrior('Ninja', 3000, 300, 30, 30)

console.table({personagem1,personagem2, personagem3})

personagem2.attack(personagem1)
personagem3.attack(personagem1)

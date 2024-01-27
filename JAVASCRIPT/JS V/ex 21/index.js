const Mage = require("./mage.js")
const Thief = require("./thief.js")
const Warrior = require("./warrior.js")


const personagem1 = new Mage(20,'Escudeiro', 1000, 100, 50)
const personagem2 = new Thief('Ninja', 2000, 200, 10)

personagem2.attack(personagem1)
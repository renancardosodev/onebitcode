import { Character } from "./character.js";

const personagem1 = new Character('Escudeiro', 1000, 100, 50)
const personagem2 = new Character('Ninja', 2000, 200, 100)

personagem1.attack(personagem2)
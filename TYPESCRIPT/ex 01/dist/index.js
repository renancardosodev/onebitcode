function SaveSpaceship(spaceships, name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    // if(verification(spaceships, spaceship.name)){
    //     spaceships.push(spaceship)
    // }else{
    //     alert('Essa nave já existe');
    // }
    return spaceship;
}
// function verification(spaceships: object[], name:string) {
//     let resp = spaceships.find((e:object) => e.name === name);
//     return !resp? true: false
// }
function AddCrew(crew, crewLimit) {
}
const spaceships = [];
const nameNav = prompt('Informe o nome da nave:');
const pilot = prompt('Informe o nome do piloto:');
const crewLimit = Number(prompt('Informe o tamanho máximo da tripulação:'));
let spaceship = SaveSpaceship(spaceships, nameNav, pilot, crewLimit);
AddCrew(spaceship.crew, spaceship.crewLimit);

function SaveSpaceship(spaceships, name, pilot, crewLimit) {
    const newSpaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    };
    newSpaceship.name = name;
    newSpaceship.pilot = pilot;
    newSpaceship.crewLimit = crewLimit;
    if (verification(spaceships, name)) {
        spaceships.push(newSpaceship);
    }
    else {
        alert('Essa nave já existe');
    }
}
function verification(spaceships, name) {
    return !spaceships.some((e) => e.name === name);
}
function addCrew(crew, crewLimit) {
    let resp;
    do {
        if (crewLimit > crew.length) {
            const tripulante = prompt('Informe o nome do tripulante');
            crew.push(tripulante);
            resp = Number(prompt(`Deseja adicionar mais um tripulante?\n
            1 - SIM
            2 - NÃO`));
        }
        else {
            alert('Não há espaço na tripulação.');
        }
    } while (resp === 1);
}
function initMission(spaceships, nameNav) {
    if (!verification(spaceships, nameNav)) {
        const existSpaceship = spaceships.find(e => e.name === nameNav);
        if (existSpaceship.inMission === true) {
            alert('Essa nave já está em missão');
        }
        else if (existSpaceship.crew.length >= existSpaceship.crewLimit / 3) {
            existSpaceship.inMission = true;
            alert(`Enviando nave ${nameNav} em missão para salvar a humanidade`);
        }
        else {
            alert('Não há tripulação suficiente');
        }
    }
    else {
        alert('Essa nave não existe');
    }
}
function listAll(spaceships) {
    let allSpaceships = '';
    spaceships.forEach(e => {
        allSpaceships +=
            `\n
        Nave: ${e.name}
        Piloto: ${e.pilot}
        Tripulação: ${e.crew}
        Tripulação máxima: ${e.crewLimit}
        Missão: ${e.inMission}`;
    });
    alert(`Todas as naves:${allSpaceships}`);
}
function menu() {
    return Number(prompt(`MENU\n
    1 - Adicionar nave\n
    2 - Adicionar tripulante\n
    3 - Enviar nava em uma missão\n
    4 - Listar todas as naves\n
    5 - SAIR`));
}
let nameNav;
let resp;
const spaceships = [];
do {
    resp = menu();
    switch (resp) {
        case 1:
            nameNav = prompt('Informe o nome da nave:');
            if (!spaceships.some((e) => e.name === nameNav)) {
                const pilot = prompt('Informe o nome do piloto:');
                const crewLimit = Number(prompt('Informe o tamanho máximo da tripulação:'));
                SaveSpaceship(spaceships, nameNav, pilot, crewLimit);
            }
            else {
                alert('Essa nave já existe');
            }
            break;
        case 2:
            nameNav = prompt('Informe o nome da nave:');
            const existSpaceship = spaceships.find((e) => e.name === nameNav);
            console.log(existSpaceship);
            if (existSpaceship) {
                addCrew(existSpaceship.crew, existSpaceship.crewLimit);
            }
            else {
                alert('Essa nave não existe');
            }
            break;
        case 3:
            nameNav = prompt('Informe o nome da nave:');
            initMission(spaceships, nameNav);
            break;
        case 4:
            listAll(spaceships);
            break;
        case 5:
            break;
        default:
            alert('Esse número não é válido');
    }
} while (resp !== 5);

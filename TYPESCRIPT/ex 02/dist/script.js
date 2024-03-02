function savePlanet(planets, nome) {
    const stringCoordenadas = prompt('Informe as coordenadas assim: xxxx xxxx xxxx xxxx');
    const arrayCoordenadas = stringCoordenadas.split(" ");
    const coordenadas = arrayCoordenadas.map(e => Number(e));
    let newPlanet = {
        nome: nome,
        coordenadas: coordenadas,
        satelites: []
    };
    planets.push(newPlanet);
    alert(`O planeta ${nome} foi salvo com sucesso`);
}
function changeSituacao(planets, nome) {
    const resp = Number(prompt(`Nova situação\n
    1 - habitado
    2 - habitável
    3 - inabitável
    4 - inexplorável`));
    const planet = planets.find(e => e.nome === nome);
    switch (resp) {
        case 1:
            planet.situacao = "habitado";
            break;
        case 2:
            planet.situacao = "habitável";
            break;
        case 3:
            planet.situacao = 'inabitavel';
            break;
        case 4:
            planet.situacao = 'inexplorável';
            break;
    }
    alert(`Situação do planeta ${nome} foi alterada com sucesso`);
}
function addSatelite(planets, nome) {
    const planet = planets.find(e => e.nome === nome);
    const satelite = prompt('Informe o nome do satélite a ser adicionado');
    if (planet.satelites.find(e => e === satelite)) {
        alert(`Já existe o satélite ${satelite} no planeta ${nome}`);
    }
    else {
        planet.satelites.push(satelite);
        alert(`Satélite ${satelite} foi adicionado ao planeta ${nome} com sucesso`);
    }
}
function removeSatelite(planets, nome) {
    const planet = planets.find(e => e.nome === nome);
    const satelite = prompt('Informe o nome do satélite a ser removido');
    if (planet.satelites.find(e => e === satelite)) {
        planet.satelites = planet.satelites.filter(e => e !== satelite);
        alert(`Satélite ${satelite} foi removido do planeta ${nome} com sucesso`);
    }
    else {
        alert(`Não existe o satélite ${satelite} no planeta ${nome}`);
    }
}
function listPlanets(planets) {
    let lista = '\n';
    planets.forEach(e => {
        let situ;
        e.situacao ? situ = e.situacao : situ = '';
        lista += `
        Nome: ${e.nome}
        Coordenadas: ${e.coordenadas}
        Situação: ${situ}
        Satélites: ${e.satelites}\n`;
    });
    alert(`Lista de planetas:${lista}`);
}
let planets = [];
let resp;
let nome;
do {
    resp = Number(prompt(`MENU\n
    1 - Adicionar um planeta
    2 - Mudar situação do planeta
    3 - Adicionar satélite
    4 - Remover satélite
    5 - Listar planetas
    6 - SAIR`));
    if (resp === 1 || resp === 2 || resp === 3 || resp === 4) {
        nome = prompt('Informe o nome do planeta');
    }
    const existplanet = planets.find(e => e.nome === nome);
    switch (resp) {
        case 1:
            existplanet ? alert('Esse planeta já existe') : savePlanet(planets, nome);
            break;
        case 2:
            existplanet ? changeSituacao(planets, nome) : alert('Esse planeta não existe');
            break;
        case 3:
            existplanet ? addSatelite(planets, nome) : alert('Esse planeta não existe');
            break;
        case 4:
            existplanet ? removeSatelite(planets, nome) : alert('Esse planeta não existe');
            break;
        case 5:
            listPlanets(planets);
            break;
        case 6:
            break;
        default:
            alert('Esse número não existe');
    }
} while (resp !== 6);

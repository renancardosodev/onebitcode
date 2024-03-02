function savePlanet (planets:Planet[], nome:string):void{

    const stringCoordenadas = prompt('Informe as coordenadas assim: xxxx xxxx xxxx xxxx')
    const arrayCoordenadas = stringCoordenadas.split(" ")
    const coordenadas = arrayCoordenadas.map(e=>Number(e)) as [number,number,number,number]

    let newPlanet:Planet = {
        nome:nome,
        coordenadas:coordenadas,
        satelites: []
    }
    planets.push(newPlanet)
    alert(`O planeta ${nome} foi salvo com sucesso`)
}

function changeSituacao(planets:Planet[], nome:string){
    const resp = Number(prompt(`Nova situação\n
    1 - habitado
    2 - habitável
    3 - inabitável
    4 - inexplorável`))
    const planet = planets.find(e=>e.nome === nome)
    switch(resp){
        case 1:
            planet.situacao = "habitado"
            break
        case 2:
            planet.situacao = "habitável"
            break
        case 3:
            planet.situacao = 'inabitavel'
            break
        case 4:
            planet.situacao = 'inexplorável'
            break
    }
    alert(`Situação do planeta ${nome} foi alterada com sucesso`)
}

function addSatelite(planets:Planet[], nome:string){
    const planet = planets.find(e=>e.nome === nome)
    const satelite = prompt('Informe o nome do satélite a ser adicionado')

    if(planet.satelites.find (e=> e === satelite)){
        alert(`Já existe o satélite ${satelite} no planeta ${nome}`)
    }else{
        planet.satelites.push(satelite)
        alert(`Satélite ${satelite} foi adicionado ao planeta ${nome} com sucesso`)
    }   
}

function removeSatelite(planets:Planet[], nome:string) {
    const planet = planets.find(e=>e.nome === nome)
    const satelite = prompt('Informe o nome do satélite a ser removido')

    if(planet.satelites.find (e=> e === satelite)){
        planet.satelites = planet.satelites.filter(e=>e!==satelite)
        alert(`Satélite ${satelite} foi removido do planeta ${nome} com sucesso`)
    }else{
        alert(`Não existe o satélite ${satelite} no planeta ${nome}`)
    }
}

function listPlanets(planets:Planet[]){
    let lista:string = '\n'

    planets.forEach(e=>{
        let situ
        e.situacao? situ = e.situacao: situ = ''
        lista+=`
        Nome: ${e.nome}
        Coordenadas: ${e.coordenadas}
        Situação: ${situ}
        Satélites: ${e.satelites}\n`})

    alert(`Lista de planetas:${lista}`)
}


type Planet = {
    nome:string,
    coordenadas: [number,number,number,number],
    situacao?: "habitado" | "habitável" | "inabitavel" | "inexplorável",
    satelites: string[]
}

let planets:Planet[] = []
let resp:number
let nome:string

do{    
    resp = Number(prompt(`MENU\n
    1 - Adicionar um planeta
    2 - Mudar situação do planeta
    3 - Adicionar satélite
    4 - Remover satélite
    5 - Listar planetas
    6 - SAIR`))

    if(resp===1 || resp===2 || resp===3 || resp===4){nome = prompt('Informe o nome do planeta')} 
    const existplanet = planets.find(e=>e.nome === nome)

    switch(resp){
        case 1:
            existplanet?alert('Esse planeta já existe'):savePlanet(planets, nome)
            break
        case 2:
            existplanet?changeSituacao(planets, nome):alert('Esse planeta não existe')
            break
        case 3:
            existplanet?addSatelite(planets, nome):alert('Esse planeta não existe')
            break
        case 4:
            existplanet?removeSatelite(planets, nome):alert('Esse planeta não existe')
            break
        case 5:
            listPlanets(planets)
            break
        case 6:
            break
        default:
            alert('Esse número não existe')
    }


}while(resp !== 6)




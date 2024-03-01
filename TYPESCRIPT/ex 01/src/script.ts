function SaveSpaceship(spaceships:Spaceship[], name:string, pilot:string, crewLimit:number) {
    const newSpaceship: Spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    }

    newSpaceship.name = name
    newSpaceship.pilot = pilot
    newSpaceship.crewLimit = crewLimit

    if(verification(spaceships, name)){
        spaceships.push(newSpaceship)
    }else{
        alert('Essa nave já existe');
    }
}

function verification(spaceships: Spaceship[], name:string):boolean {
    return !spaceships.some((e:Spaceship) => e.name === name);
}

function addCrew (crew: string[], crewLimit:number) {
    let resp: number
    do{
        if(crewLimit>crew.length){
            const tripulante:string = prompt('Informe o nome do tripulante')
            crew.push(tripulante)
            resp = Number(prompt(`Deseja adicionar mais um tripulante?\n
            1 - SIM
            2 - NÃO`))
        }else{
            alert('Não há espaço na tripulação.')
        }
    }while(resp === 1)
}

function initMission (spaceships:Spaceship[], nameNav:string) {
    if(!verification(spaceships, nameNav)){
        const existSpaceship = spaceships.find(e => e.name === nameNav)
        existSpaceship.inMission = true
        alert(`A nave ${nameNav} está em missão para salvar a humanidade`)
    }else{
        alert('Essa nave não existe')
    }
}

function listAll(spaceships:Spaceship[]) {
    let allSpaceships:string = ''
    spaceships.forEach(e =>{
        allSpaceships += 
        `\n
        Nave: ${e.name}
        Piloto: ${e.pilot}
        Tripulação: ${e.crew}
        Tripulação máxima: ${e.crewLimit}
        Missão: ${e.inMission}`
    })
    alert(`Todas as naves:${allSpaceships}`)
}

function menu () {
    return Number(prompt(`MENU\n
    1 - Adicionar nave\n
    2 - Adicionar tripulante\n
    3 - Enviar nava em uma missão\n
    4 - Listar todas as naves\n
    5 - SAIR`))
}


let nameNav:string
let resp:number
interface Spaceship{
    name:string,
    pilot:string,
    crewLimit:number,
    crew: string[],
    inMission:boolean
}
const spaceships:Spaceship[] = []

do{
    resp = menu()
    switch(resp) {
        case 1:
            nameNav = prompt('Informe o nome da nave:')
            if(!spaceships.some ((e)=>e.name === nameNav)){
                const pilot = prompt('Informe o nome do piloto:')
                const crewLimit = Number(prompt('Informe o tamanho máximo da tripulação:'))
                SaveSpaceship(spaceships, nameNav, pilot, crewLimit)
            }else{
                alert('Essa nave já existe')
            }

            break
        case 2:
            nameNav = prompt('Informe o nome da nave:')
            const existSpaceship = spaceships.find ((e)=>e.name === nameNav)
            console.log(existSpaceship)
            if(existSpaceship){
                addCrew(existSpaceship.crew, existSpaceship.crewLimit)
            }else{
                alert('Essa nave não existe')
            }
            break
        case 3:
            nameNav = prompt('Informe o nome da nave:')
            initMission(spaceships, nameNav)
            break
        case 4:
            listAll(spaceships)
            break
        case 5:
            break
        default:
            alert('Esse número não é válido')
    }
}while(resp !== 5)

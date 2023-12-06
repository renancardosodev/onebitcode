const nomes = []
let paciente = ''
let resposta = ''
let listaEspera = []

do{
    listaEspera = nomes.map((paciente,i)=> (i+1) + 'º - ' + paciente)
    
    resposta = prompt('Lista de Espera:\n' + listaEspera.join('\n') +
                      '\n\nA - Novo paciente    |    B - Consultar paciente    |    C - Sair')

    switch (resposta){
        case 'A':
            paciente = prompt('Qual o nome do novo paciente?')
            nomes.push(paciente)
            break
        case 'B':
            paciente = nomes.shift()
            if (paciente === undefined){
                alert('Não há pacientes na fila')
            }else{
                alert('Paciente: ' + paciente.toUpperCase())
            }
            break
        case 'C':
            break
        default:
            break
    }
}while (resposta !== 'C')
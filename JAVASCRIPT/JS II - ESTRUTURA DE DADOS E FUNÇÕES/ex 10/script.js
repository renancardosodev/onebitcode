function acessarMenu() {
    return prompt(
        'Bem-vindo ao Sistema de Emprego:\n\n' +
        'Informe sua opção:\n' +
        '1 - Listar vagas disponíveis\n' +
        '2 - Criar uma nova vaga\n' +
        '3 - Visualizar uma vaga\n' +
        '4 - Inscrever um candidato em uma vaga\n' +
        '5 - Excluir uma vaga\n' +
        '6 - SAIR')
}

function listarVagas() {
    let mensagem = ''

    vagas.forEach((e,i)=>{
        mensagem += 
            '\nÍndice - ' + i +
            '\nNome da vaga - ' + e.nomeVaga +
            '\nQuantidade de inscritos - ' + e.nomeCandidatos.length  + '\n'      
    })
    
    alert('Lista de Vagas:\n' + mensagem)
}

function adicionarVaga() {
    let nomeVaga = prompt('Informe o nome da vaga:')
    let descricao = prompt('Faça uma breve descrição da vaga:')
    let data = prompt('Informe a data limite: dd/mm/aaaa')
    
    let mensagemConfirmacao = confirm('Essas informações estão corretas?\n' + 
                                    '\nNome da Vaga: ' + nomeVaga + 
                                    '\nDescrição: ' + descricao + 
                                    '\nData limite: ' + data)
    
    if (mensagemConfirmacao){
        vagas.push({
            nomeVaga,
            descricao,
            nomeCandidatos: [],
            data
        })
  
        alert('Essa nova vaga foi salva com sucesso!')
    }else{
        alert('Você vai ser direcionado ao Menu Principal')
    }
}
function excluirVaga(indice) {
    const vagaSelecionada = vagas.filter((e, i) => i == indice)[0];

    if (vagaSelecionada) {
        if (confirm(
            'Tem certeza que deseja excluir essa vaga?\n\n' +
            'Índice: ' + indice +
            '\nNome da vaga: ' + vagaSelecionada.nomeVaga +
            '\nDescrição: ' + vagaSelecionada.descricao +
            '\nData limite: ' + vagaSelecionada.data +
            '\nQuantidade de candidatos: ' + vagaSelecionada.nomeCandidatos.length +
            '\nNome dos candidatos: \n' + vagaSelecionada.nomeCandidatos.join('\n')
        )){
            vagas.splice(indice)
            alert('Vaga excluída com sucesso!')
        } else {
            alert('Ocorreu um erro ao excluir a vaga. Tente novamente.')
        }
    } else {
        alert('Vaga não encontrada para o índice informado.');
    }
}

function visualizarVaga(indice) {
    const vagaSelecionada = vagas.filter((e, i) => i == indice)[0];

    if (vagaSelecionada) {
        alert(
            'Dados da vaga\n\n' +
            'Índice: ' + indice +
            '\nNome da vaga: ' + vagaSelecionada.nomeVaga +
            '\nDescrição: ' + vagaSelecionada.descricao +
            '\nData limite: ' + vagaSelecionada.data +
            '\nQuantidade de candidatos: ' + vagaSelecionada.nomeCandidatos.length +
            '\nNome dos candidatos: \n' + vagaSelecionada.nomeCandidatos.join('\n')
        )
    } else {
        alert('Vaga não encontrada para o índice informado.');
    }
}

function cadastrarCandidato(nome, indice) { 
    let confirmacao =  confirm(
        'Os dados estão corretos?\n' +
        '\nNome do candidato: ' + nome +
        '\nÍndice da Vaga: ' + indice +
        '\nNome da Vaga: ' + vagas[indice].nomeVaga
    )
    
    if (confirmacao) {
        vagas.forEach((e,i)=>{
            if (i == indice){
                e.nomeCandidatos.push(nome)
                alert('Candidato inscrito na vaga com sucesso!')
            }
        })
    }
}

const vagas = [
    {   
        nomeVaga: 'Farmacia',
        descricao: 'Esssa',
        nomeCandidatos: ['Luciana', 'Matheus', 'Mauricio'],
        data:2       
    },
    {   
        nomeVaga: 'Enfermagem',
        descricao: 'adfzdfzdczdfzdc',
        nomeCandidatos: ['Luciana', 'Matheus', 'Mauricio', 'Matheus'],
        data:50    
    }
]

let opcao = ''
let indice = ''

do{
    opcao = acessarMenu()

    switch (opcao){
        case '1': //LISTAR TODAS AS VAGAS
            listarVagas()
            break
        case '2': //CRIAR UMA VAGA
            adicionarVaga()
            break
        case '3': //VISUALUZAR VAGA ESPECÍFICA
            indice = prompt('Informe o índice da vaga:')
            visualizarVaga(indice)
            break
        case '4': //INSCREVER CANDIDATO A VAGA
            let nome = prompt('Informe o nome do candidato:')
            indice = prompt('Informe o índice da vaga:')
            cadastrarCandidato(nome, indice)
            break
        case '5': //EXCLUIR VAGA
            indice = prompt('Informe o índice da vaga a ser excluida: ')
            excluirVaga(indice)
            break
        case '6': //SAIR
            break
        default:
            alert('Essa opção não existe! Tente outra vez.')                       
    }
}while(opcao !== '6')
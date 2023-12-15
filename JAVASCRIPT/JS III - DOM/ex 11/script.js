function remover(){

}

function verificacao(){

}

function adicionar(){
    const inputs = document.getElementById('inputs')

    

    const h2 = document.createElement('h2')
    const form = document.createElement('form')

    const labelposicao = document.createElement('label')
    const labelnome = document.createElement('label')
    const labelNumCamisa = document.createElement('label')

    const posicao = document.createElement('input')
    const nome = document.createElement('input')
    const numCamisa = document.createElement('input')
    const submit = document.createElement('button')

    h2.innerText = 'Dados do jogador:'

    labelposicao.innerText = 'Posição do jogador: '
    labelposicao.htmlFor = 'position'

    labelnome.innerText = 'Nome do jogador: '
    labelnome.htmlFor = 'name'

    labelNumCamisa.innerText = 'Número da camisa: '
    labelNumCamisa.htmlFor = 'num'

    posicao.name = 'position'
    posicao.type = 'text'
    posicao.id = 'position'
    posicao.className = 'inputs'
    // posicao.value = 'position'

    nome.name = 'name'
    nome.type = 'text'
    nome.id = 'name'
    nome.className = 'inputs'
    // nome.value = 'name'

    numCamisa.name = 'num'
    numCamisa.type = 'number'
    numCamisa.id = 'num'
    numCamisa.className = 'inputs'
    // numCamisa.value = 'num'

    submit.innerText = 'Enviar'
    submit.type = 'submit'
    submit.className = 'submit'

    form.append(labelposicao, posicao, labelnome, nome, labelNumCamisa, numCamisa, submit)
    inputs.append(h2, form)


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.reset();
    });
}

const adicionarJogador = document.getElementsByClassName('adicionar')
const removerJogador = document.getElementsByClassName('remover')

adicionarJogador.addEventListener('click', adicionar)
removerJogador.addEventListener('click', remover)



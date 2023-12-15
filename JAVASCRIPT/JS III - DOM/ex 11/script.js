function remover(){

}

function validacaoDadosPreenchidos(inputPosicao, inputNome, inputNumCamisa){
    if (inputPosicao.value == ''){
        return false
    }else if(inputNome.value == ''){
        return false
    }else if (inputNumCamisa.value == ''){
        return false
    }else{
        return true
    }
}

function creatSpan(inputPosicao, inputNome, inputNumCamisa){
    const temSpan = document.getElementById('validacaoInputs')

    if (validacaoDadosPreenchidos(inputPosicao, inputNome, inputNumCamisa)){
        if (temSpan){
            temSpan.remove()
        }
        form.reset();
    }else {
        if(!temSpan){
            const spanValidacao = document.createElement('span')
            spanValidacao.id = 'validacaoInputs'
            spanValidacao.innerText = 'Verifique se todos os campos estão preenchidos corretamente.'

            inputs.appendChild(spanValidacao)
        }
    }
}

function adicionar(){
    const inputs = document.getElementById('inputs')

    const h2 = document.createElement('h2')
    const form = document.createElement('form')

    const labelposicao = document.createElement('label')
    const labelnome = document.createElement('label')
    const labelNumCamisa = document.createElement('label')

    const inputPosicao = document.createElement('input')
    const inputNome = document.createElement('input')
    const inputNumCamisa = document.createElement('input')
    const submit = document.createElement('button')

    h2.innerText = 'Dados do jogador:'

    labelposicao.innerText = 'Posição do jogador: '
    labelposicao.htmlFor = 'position'

    labelnome.innerText = 'Nome do jogador: '
    labelnome.htmlFor = 'name'

    labelNumCamisa.innerText = 'Número da camisa: '
    labelNumCamisa.htmlFor = 'num'

    inputPosicao.name = 'position'
    inputPosicao.type = 'text'
    inputPosicao.id = 'position'
    inputPosicao.className = 'inputs'
    // inputPosicao.value = 'position'

    inputNome.name = 'name'
    inputNome.type = 'text'
    inputNome.id = 'name'
    inputNome.className = 'inputs'
    // inputNome.value = 'name'

    inputNumCamisa.name = 'num'
    inputNumCamisa.type = 'number'
    inputNumCamisa.id = 'num'
    inputNumCamisa.className = 'inputs'
    // inputNumCamisa.value = 'num'

    submit.innerText = 'Enviar'
    submit.type = 'submit'
    submit.className = 'submit'

    form.append(labelposicao, inputPosicao, labelnome, inputNome, labelNumCamisa, inputNumCamisa, submit)
    inputs.append(h2, form)


    form.addEventListener('submit', function(event) {
        event.preventDefault()
        creatSpan(inputPosicao, inputNome, inputNumCamisa)        
    })
}

const adicionarJogador = document.getElementById('adicionar')
const removerJogador = document.getElementById('remover')

adicionarJogador.addEventListener('click', adicionar)
// removerJogador.addEventListener('click', remover)



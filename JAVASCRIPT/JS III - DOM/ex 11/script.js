// --------------------------------  CONFIRMAÇÃO DE DADOS PARA SALVAR NA LISTA DE JOGADORES  -----------------------------
function excluirJogador(inputCamisa, form, inputs, listJogadores){
    const spanConfirmarDados = document.createElement('span')
    const pConfirmarDados = document.createElement('p')
    const buttonConfirmarDados = document.createElement('button')

    spanConfirmarDados.id = 'confirmDados'
    buttonConfirmarDados.className = 'buttonEnviar'
    buttonConfirmarDados.type = 'submit'
    buttonConfirmarDados.innerText = 'Excluir'
    pConfirmarDados.innerText = 'Aperte em "Excluir" para excluir.'
    
    spanConfirmarDados.append(pConfirmarDados, buttonConfirmarDados)
    inputs.appendChild(spanConfirmarDados)

    console.log(listJogadores)

    buttonConfirmarDados.addEventListener('click', () => {
        const index = listJogadores.findIndex(e =>  e.numeroCamisa == inputCamisa.value)
        listJogadores.splice(index,1)

        form.reset();
        buttonConfirmarDados.remove()
        pConfirmarDados.innerText = 'Jogador Excluído!'
        setTimeout(()=>pConfirmarDados.remove(), 2000)
        console.log(listJogadores)
    })
    
}

// --------------------------------  VALIDAR REMOVER PARA VER SE ALGUM CAMPO ESTÁ VAZIO  -----------------------------
function validacaoDadosRemocao(inputCamisa){
    if (inputCamisa.value == ''){
        return false
    }else {
        return true
    }
}

// --------------------------------  CRIANDO DIV DE CAMPO VAZIO -----------------------------
function preencherCamposRemocao(inputCamisa, form, inputs, listJogadores){
    const temDiv = document.getElementById('validacaoInputs')

    if (validacaoDadosRemocao(inputCamisa)){
        if (temDiv){
            temDiv.remove()
        }
       return true

    }else {
        if(!temDiv){
            const divValidacao = document.createElement('div')
            divValidacao.id = 'validacaoInputs'
            divValidacao.innerText = 'Verifique se todos os campos estão preenchidos corretamente.'

            inputs.appendChild(divValidacao)
            return false
        }
    }
}

function remover(listJogadores, inputs){
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    const form = document.createElement('form')
    const label = document.createElement('label')
    const inputCamisa = document.createElement('input')
    const submit = document.createElement('button')

    h2.innerText = 'Remover jogador'
    p.innerText = 'Informe o número da camisa para remover o jogador do seu time.'

    label.htmlFor = 'camisa'
    label.innerText = 'Número da camisa'

    inputCamisa.name = 'camisa'
    inputCamisa.id = 'camisa'
    inputCamisa.type = 'text'

    submit.innerText = 'Remover'
    submit.className = 'buttonEnviar'
    submit.type = 'submit'

    form.append(label, inputCamisa, submit)
    inputs.append(h2, p, form)

    let controleDeClicks = true

    submit.addEventListener('click', function (event){
        event.preventDefault()
        if (preencherCamposRemocao(inputCamisa, form, inputs, listJogadores)){
            if(controleDeClicks){
                excluirJogador(inputCamisa, form, inputs, listJogadores)
                controleDeClicks = false
            }
        }
        console.log(listJogadores)
    })
}


// --------------------------------  CONFIRMAÇÃO DE DADOS PARA SALVAR NA LISTA DE JOGADORES  -----------------------------
function enviarDados(inputPosicao, inputNome, inputNumCamisa, form, inputs, listJogadores){
    const spanConfirmarDados = document.createElement('span')
    const pConfirmarDados = document.createElement('p')
    const buttonConfirmarDados = document.createElement('button')

    spanConfirmarDados.id = 'confirmDados'
    buttonConfirmarDados.className = 'buttonEnviar'
    buttonConfirmarDados.type = 'submit'
    buttonConfirmarDados.innerText = 'Sim'
    pConfirmarDados.innerText = 'Aperte em "Sim" caso os dados do jogador estejam corretos.'
    
    spanConfirmarDados.append(pConfirmarDados, buttonConfirmarDados)
    inputs.appendChild(spanConfirmarDados)

    buttonConfirmarDados.addEventListener('click', () => {
        listJogadores.push({posicao: inputPosicao.value, nome: inputNome.value, numeroCamisa: inputNumCamisa.value})
        form.reset();

        buttonConfirmarDados.remove()
        pConfirmarDados.innerText = 'Enviado!'
        setTimeout(()=>pConfirmarDados.remove(), 2000)
    })
}
 

// --------------------------------  VALIDAR ADICIONAR PARA VER SE ALGUM CAMPO ESTÁ VAZIO  -----------------------------
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


// --------------------------------  CRIANDO DIV DE CAMPO VAZIO -----------------------------
function preencherCamposCorretamente(inputPosicao, inputNome, inputNumCamisa, form, inputs, listJogadores){
    const temDiv = document.getElementById('validacaoInputs')

    if (validacaoDadosPreenchidos(inputPosicao, inputNome, inputNumCamisa)){
        if (temDiv){
            temDiv.remove()
        }
        return true

    }else {
        if(!temDiv){
            const divValidacao = document.createElement('div')
            divValidacao.id = 'validacaoInputs'
            divValidacao.innerText = 'Verifique se todos os campos estão preenchidos corretamente.'

            inputs.appendChild(divValidacao)

            return false
        }
    }
}


// --------------------------------  FUNÇÕES DO BOTÃO ADICIONAR  -----------------------------
function adicionar(listJogadores, inputs){
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

    inputNome.name = 'name'
    inputNome.type = 'text'
    inputNome.id = 'name'
    inputNome.className = 'inputs'

    inputNumCamisa.name = 'num'
    inputNumCamisa.type = 'number'
    inputNumCamisa.id = 'num'
    inputNumCamisa.className = 'inputs'

    submit.innerText = 'Adicionar'
    submit.type = 'submit'
    submit.className = 'buttonEnviar'

    form.append(labelposicao, inputPosicao, labelnome, inputNome, labelNumCamisa, inputNumCamisa, submit)
    inputs.append(h2, form)

    let controleDeClicks = true

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        if (preencherCamposCorretamente(inputPosicao, inputNome, inputNumCamisa, form, inputs, listJogadores)){
            if(controleDeClicks){
                enviarDados(inputPosicao, inputNome, inputNumCamisa, form, inputs, listJogadores)
                controleDeClicks = false
            }
        }
        console.log(listJogadores)
    })

}


// --------------------------------  PRINCIPAL  -----------------------------
const adicionarJogador = document.getElementById('adicionar')
const removerJogador = document.getElementById('remover')
const inputs = document.getElementById('inputs')

const listJogadores = []

adicionarJogador.addEventListener('click', () => {
    inputs.textContent= ''
    adicionar(listJogadores,inputs)
})

removerJogador.addEventListener('click', () => {
    inputs.textContent= ''
    remover(listJogadores,inputs)
})



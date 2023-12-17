
// ____________________________________  LISTAR  ____________________________________
function listarJogadores (listJogadores, inputs){

    const divJogadoresExistente = inputs.querySelector('.listaDeJogadores');
    if (divJogadoresExistente) {
        divJogadoresExistente.remove();
    }

    const divJogadores = document.createElement('div')
    const h2Jogadores = document.createElement('h2')
    const ul = document.createElement('ul')    

    divJogadores.className = 'listaDeJogadores'
    h2Jogadores.innerText = 'Lista dos Jogadores'
    h2Jogadores.className = 'tituloListaDeJogadores'

    divJogadores.append(h2Jogadores, ul)   
    inputs.appendChild(divJogadores)

    listJogadores.map(e=>{
        const li = document.createElement('li')
        li.innerText = `Posição: ${e.posicao}\n` + `Nome: ${e.nome}\n` + `Número da camisa: ${e.numeroCamisa}\n\n`
        ul.append(li)
    })
}




// ____________________________________  REMOVER  ____________________________________




// --------------------------------  CONFIRMAÇÃO DE DADOS PARA SALVAR NA LISTA DE JOGADORES  -----------------------------
function excluirJogador(inputCamisa, form, inputs, listJogadores){
    const spanConfirmarDados = document.createElement('span')
    const pConfirmarDados = document.createElement('p')
    const buttonConfirmarDados = document.createElement('button')
    const divJogadores = document.createElement('div')

    spanConfirmarDados.id = 'confirmDados'
    buttonConfirmarDados.className = 'buttonEnviar'
    buttonConfirmarDados.id = 'buttonEnviar'
    buttonConfirmarDados.type = 'submit'
    buttonConfirmarDados.innerText = 'Excluir'
    pConfirmarDados.innerText = 'Aperte em "Excluir" para excluir.'
    
    spanConfirmarDados.append(pConfirmarDados, buttonConfirmarDados)

    buttonConfirmarDados.addEventListener('click', () => {
        const index = listJogadores.findIndex(e =>  e.numeroCamisa == inputCamisa.value)
        listJogadores.splice(index,1)

        form.reset();

        buttonConfirmarDados.remove()
        pConfirmarDados.innerText = 'Jogador Excluído!'
        setTimeout(()=>pConfirmarDados.remove(), 2000)
        
        listarJogadores(listJogadores, inputs, divJogadores)
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
function preencherCamposRemocao(inputCamisa, inputs, listJogadores){
    const temDiv = document.getElementById('validacaoInputs')
    const divValidacao = document.createElement('div')
    divValidacao.id = 'validacaoInputs'

    const existe = listJogadores.some(e=> e.numeroCamisa == inputCamisa.value)
 
    if (validacaoDadosRemocao(inputCamisa)){
        if (temDiv){
            temDiv.remove()
        } 
        if (existe){
            return true
            
        }else{
            divValidacao.innerText = 'Esse jogador não existe!'
            inputs.appendChild(divValidacao)
            return false
        }
    }else {
        
        if(!temDiv){
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
    submit.id = 'btnRemover'

    form.append(label, inputCamisa, submit)
    inputs.append(h2, p, form)

    let controleDeClicks = true

    submit.addEventListener('click', function (event){
        event.preventDefault()
        if (preencherCamposRemocao(inputCamisa, inputs, listJogadores)){
            if(controleDeClicks){
                excluirJogador(inputCamisa, form, inputs, listJogadores)
                controleDeClicks = false
            }
        }

        const targetElement = document.getElementById('buttonEnviar');
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
    })
}





// ____________________________________  ADICIONAR  ____________________________________





// --------------------------------  CONFIRMAÇÃO DE DADOS PARA SALVAR NA LISTA DE JOGADORES  -----------------------------
function enviarDados(inputPosicao, inputNome, inputNumCamisa, form, inputs, listJogadores,spanConfirmarDados){

    const pConfirmarDados = document.createElement('p')
    const buttonConfirmarDados = document.createElement('button')
    
    buttonConfirmarDados.className = 'buttonEnviar'
    buttonConfirmarDados.id = 'buttonEnviar'
    buttonConfirmarDados.type = 'submit'
    buttonConfirmarDados.innerText = 'Sim'
    pConfirmarDados.innerText = 'Aperte em "Sim" caso os dados do jogador estejam corretos.'
    
    spanConfirmarDados.append(pConfirmarDados, buttonConfirmarDados)

    buttonConfirmarDados.addEventListener('click', () => {
        listJogadores.push({posicao: inputPosicao.value, nome: inputNome.value, numeroCamisa: inputNumCamisa.value})

        form.reset();

        buttonConfirmarDados.remove()
        pConfirmarDados.innerText = 'Enviado!'
        setTimeout(()=>pConfirmarDados.remove(), 2000)

        listarJogadores(listJogadores, inputs)
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
function preencherCamposCorretamente(inputPosicao, inputNome, inputNumCamisa, inputs, listJogadores){
    const temDiv = document.getElementById('validacaoInputs')
    const divValidacao = document.createElement('div')
    divValidacao.id = 'validacaoInputs'

    const existe = listJogadores.some(e=> e.numeroCamisa == inputNumCamisa.value)

    if (validacaoDadosPreenchidos(inputPosicao, inputNome, inputNumCamisa)){
        if (temDiv){
            temDiv.remove()
        }
        
        if (existe){
            divValidacao.innerText = 'Esse jogador já existe, remova o jogador para adicionar um novo.'
            inputs.appendChild(divValidacao)
            return false
        }else{
            return true
        }

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
    const spanConfirmarDados = document.createElement('span')

    const labelposicao = document.createElement('label')
    const labelnome = document.createElement('label')
    const labelNumCamisa = document.createElement('label')

    const inputPosicao = document.createElement('input')
    const inputNome = document.createElement('input')
    const inputNumCamisa = document.createElement('input')
    const submit = document.createElement('button')

    h2.innerText = 'Dados do jogador'

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
    submit.id = 'btnAdicionar'

    spanConfirmarDados.id = 'confirmDados'

    form.append(labelposicao, inputPosicao, labelnome, inputNome, labelNumCamisa, inputNumCamisa, submit)
    inputs.append(h2, form, spanConfirmarDados)

    form.addEventListener('submit', function(event) {
        event.preventDefault()
        spanConfirmarDados.innerHTML = ''

        if (preencherCamposCorretamente(inputPosicao, inputNome, inputNumCamisa, inputs, listJogadores)){
            enviarDados(inputPosicao, inputNome, inputNumCamisa, form, inputs, listJogadores,spanConfirmarDados)
        }

        const targetElement = document.getElementById('buttonEnviar');
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
    })

}



// ____________________________________  ESCOPO PRINCIPAL  ____________________________________



// --------------------------------  PRINCIPAL  -----------------------------
const secaoTexto = document.getElementsByClassName('sectionForm')[0]
const adicionarJogador = document.getElementById('adicionar')
const removerJogador = document.getElementById('remover')
const inputs = document.getElementById('inputs')

const listJogadores = []

adicionarJogador.addEventListener('click', () => {
    secaoTexto.classList.add('showList')
    inputs.textContent = ''
    adicionar(listJogadores,inputs)

    let targetElement = document.getElementById('btnAdicionar');
  
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
})

removerJogador.addEventListener('click', () => {
    secaoTexto.classList.add('showList')
    inputs.textContent = ''
    remover(listJogadores,inputs)

    let targetElement = document.getElementById('btnRemover');
  
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
})



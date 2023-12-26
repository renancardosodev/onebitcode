function criarLabel(id, text, className){
    const label = document.createElement('label')
    label.htmlFor = id
    label.innerText = text
    label.classList.add(className)

    return label
}

function criarInput(id, type, classInput, value= '', name, placeholder=''){
    const input= document.createElement('input')

    input.id = id
    input.type = type
    input.required = 'required'
    input.value = value
    input.name = name
    input.placeholder = placeholder
    input.classList.add(classInput)

    return input
}

function clicarBotaoAdicionarTech(inputIndex, form){

    const id = 'inputTech-' + inputIndex
    const divTech = document.createElement('div')
    const divRadios = document.createElement('div')

    divTech.classList.add('divTech')
    divRadios.classList.add('divRadios')

    const inputTech = criarInput(id, 'text', 'inputTech', '', 'tech', 'Tecnologia')

    const inputExp1 = criarInput(id + '-1', 'radio', 'inputRadio', '0-2 anos', inputIndex + '-radio', '');
    const inputExp2 = criarInput(id + '-2', 'radio', 'inputRadio', '3-4 anos', inputIndex + '-radio', '');
    const inputExp3 = criarInput(id + '-3', 'radio', 'inputRadio', '5+ anos', inputIndex + '-radio', '');
    const labelExp1 = criarLabel(id + '-1', '0-2 anos', 'labelRadio');
    const labelExp2 = criarLabel(id + '-2', '3-4 anos', 'labelRadio');
    const labelExp3 = criarLabel(id + '-3', '5+ anos', 'labelRadio');

    const labelExp = document.createElement('label')
    labelExp.innerText = 'Experiência'

    const buttonRemove = document.createElement('button')
    buttonRemove.classList.add('buttonRemove')
    buttonRemove.type = 'button'

    const liTech = document.createElement('li')
    liTech.id = 'li-' + inputIndex
    liTech.classList.add('liTech')

    divTech.append(inputTech)
    divRadios.append(labelExp, inputExp1, labelExp1, inputExp2, labelExp2, inputExp3, labelExp3)
    liTech.append(divTech, divRadios, buttonRemove)
    form.appendChild(liTech)

    buttonRemove.addEventListener('click', ()=>{
        liTech.remove()
    })
}

function clicarBotaoEnviar(inputName, divForm, developers){

    const allInputTech = [...document.getElementsByClassName('inputTech')]
    const allInputRadio = [...document.querySelectorAll('.inputRadio:checked')]
    const aviso = document.getElementById('avisoEnviar')

    if (allInputsPreenchidos(allInputTech, allInputRadio)) {
        const tech = allInputTech.map((e, i) => {
            return { tecnologia: e.value, experiencia: allInputRadio[i].value}
        })

        const newDeveloper = { name: inputName, tech }

        if (aviso) {
            aviso.remove()
        }
        developers.push(newDeveloper)
        console.log(developers)
        return true

    } else if (!aviso) {
        const aviso = document.createElement('p')
        aviso.innerText = 'Preencha corretamente todos os campos'
        aviso.id = 'avisoEnviar'
        divForm.appendChild(aviso)
        return false
    }
}

function allInputsPreenchidos(allInputTech, allInputRadio) {
    let tech = true
    allInputTech.forEach((e)=>{
        if(!e.value){
            console.log(e.value)
            tech = false
        }
    })
    if (allInputRadio.length !== allInputTech.length){
        tech = false
    }
    return tech
}

function parabens(divForm){
    const divCadastrado = document.createElement('div')
    const h2Parabens = document.createElement('h2')
    const pParabens = document.createElement('p')
    const buttonVoltar = document.createElement('button')
    divCadastrado.id = 'divCadastrado'
    h2Parabens.innerText = 'Parabéns!'
    pParabens.innerText = 'Seu cadastro foi enviado.'
    buttonVoltar.innerText = 'Voltar'

    divCadastrado.append(h2Parabens,pParabens,buttonVoltar)
    divForm.appendChild(divCadastrado)

    buttonVoltar.addEventListener('click', ()=>{
        divForm.remove()
        sectionForm.append(formName)
    })
}

function criarSecao(sectionForm, inputName, developers) {
    const divForm = document.createElement('div')
    const form = document.createElement('form')
    const buttonAddTech = document.createElement('button')
    const buttonCadastrar = document.createElement('button')

    buttonAddTech.id = 'buttonAddTech'
    buttonAddTech.innerText = 'Adicionar Tecnologia'
    buttonCadastrar.id = 'buttonCadastrar'
    buttonCadastrar.type = 'submit'
    buttonCadastrar.innerText = 'Enviar'
    divForm.id = 'divForm'

    divForm.append(form, buttonAddTech)
    sectionForm.append(divForm)

    let inputIndex = 0

    buttonAddTech.addEventListener('click', ()=>{
        clicarBotaoAdicionarTech(inputIndex, form)
        inputIndex++

        buttonAddTech.innerText = 'Adicionar mais'
        divForm.append(buttonCadastrar)
    })
    
    buttonCadastrar.addEventListener('click', (evt) => {
        evt.preventDefault()
        let resposta = clicarBotaoEnviar(inputName, divForm, developers)

        if(resposta){
            form.reset()
            form.remove()
            buttonAddTech.remove()
            buttonCadastrar.remove()

            parabens(divForm)
        }
    })
}

const sectionForm = document.getElementsByClassName('sectionForm')[0]
const formName = document.getElementById('formName')
const buttonEntrar = document.getElementById('entrar')
let developers = []


buttonEntrar.addEventListener('click', ()=>{
    const inputName = document.getElementById('name').value
    if (inputName){
        formName.remove()
        criarSecao(sectionForm, inputName, developers)
    }else{
        const aviso = document.getElementById('aviso')
        if(!aviso){
            const aviso = document.createElement('p')
            aviso.innerText = 'Preencha com o seu nome completo'
            aviso.id = 'aviso'
            formName.appendChild(aviso)
        }
    }
})
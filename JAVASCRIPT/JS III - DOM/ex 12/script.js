function criarLabel(id, text){
    const label = document.createElement('label')
    label.htmlFor = id
    label.innerText = text

    return label
}

function criarInput(id, type, classInput, name= ''){
    const input= document.createElement('input')

    input.id = id
    input.type = type
    input.required = 'required'
    input.name = name
    input.classList.add(classInput)

    return input
}

function criarSecao(sectionForm) {
    const divForm = document.createElement('div')
    const form = document.createElement('form')
    const buttonAddTech = document.createElement('button')
    const buttonCadastrar = document.createElement('button')
    const buttonRemove = document.createElement('button')

    buttonAddTech.id = 'buttonAddTech'
    buttonAddTech.innerText = 'Adicionar Tecnologia'
    buttonCadastrar.id = 'buttonCadastrar'
    buttonCadastrar.type = 'submit'
    buttonCadastrar.innerText = 'Enviar'
    buttonRemove.innerText = 'x'
    buttonRemove.classList.add('buttonRemove')
    divForm.id = 'divForm'


    console.log(sectionForm)

    divForm.append(buttonAddTech, form, buttonCadastrar)
    sectionForm.append(divForm)

    let inputIndex = 0

    buttonAddTech.addEventListener('click', ()=>{
        const id = 'inputTech-' + inputIndex

        const labelTech = criarLabel(id, '\nTecnologia', 'labelTech')
        const inputTech = criarInput(id, 'text', 'inputTech')

        const inputExp1 = criarInput(id + '-1', 'radio', 'inputRadio', 'Exp-' + inputIndex)
        const inputExp2 = criarInput(id + '-2', 'radio', 'inputRadio', 'Exp-' + inputIndex)
        const inputExp3 = criarInput(id + '-3', 'radio', 'inputRadio', 'Exp-' + inputIndex)
        const labelExp1 = criarLabel (id + '-1', '0-2 anos')
        const labelExp2 = criarLabel (id + '-2', '3-5 anos')
        const labelExp3 = criarLabel (id + '-3', '+5 anos')

        const labelExp = document.createElement('label')
        labelExp.innerText = 'Experiência'

        inputIndex++
        
        form.append(labelTech, inputTech, labelExp, inputExp1, labelExp1, inputExp2, labelExp2, inputExp3, labelExp3, buttonRemove)

        buttonRemove.addEventListener('click', (evt)=>{
            evt.defaultPrevented()
            labelTech.remove()
            inputTech.remove()
        })
    })


    
}

const sectionForm = document.getElementsByClassName('sectionForm')[0]
const formName = document.getElementById('formName')
const buttonEntrar = document.getElementById('entrar')

buttonEntrar.addEventListener('click', ()=>{
    criarSecao(sectionForm)
})
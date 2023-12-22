function criarLabel(id, text, className){
    const label = document.createElement('label')
    label.htmlFor = id
    label.innerText = text
    label.classList.add(className)

    return label
}

function criarInput(id, type, classInput, name= '',placeholder=''){
    const input= document.createElement('input')

    input.id = id
    input.type = type
    input.required = 'required'
    input.name = name
    input.placeholder = placeholder
    input.classList.add(classInput)

    return input
}

function criarSecao(sectionForm) {
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

    console.log(sectionForm)

    divForm.append(buttonAddTech, form, buttonCadastrar)
    sectionForm.append(divForm)

    let inputIndex = 0

    buttonAddTech.addEventListener('click', ()=>{
        const id = 'inputTech-' + inputIndex
        
        const divTech = document.createElement('div')
        const divRadios = document.createElement('div')
        divRadios.classList.add('divRadios')
        divTech.classList.add('divTech')

        const inputTech = criarInput(id, 'text', 'inputTech', '', 'Tecnologia')

        const inputExp1 = criarInput(id + '-1', 'radio', 'inputRadio', 'Exp-' + inputIndex)
        const inputExp2 = criarInput(id + '-2', 'radio', 'inputRadio', 'Exp-' + inputIndex)
        const inputExp3 = criarInput(id + '-3', 'radio', 'inputRadio', 'Exp-' + inputIndex)
        const labelExp1 = criarLabel (id + '-1', '0-2 anos', 'labelRadio')
        const labelExp2 = criarLabel (id + '-2', '3-4 anos', 'labelRadio')
        const labelExp3 = criarLabel (id + '-3', '5+ anos', 'labelRadio')

        const labelExp = document.createElement('label')
        labelExp.innerText = 'Experiência'



        const buttonRemove = document.createElement('button')
        buttonRemove.classList.add('buttonRemove')
        buttonRemove.type = 'button'

        const liTech = document.createElement('li')
        liTech.id = 'li-' + inputIndex
        liTech.classList.add('liTech')

        inputIndex++

        divTech.append(inputTech)
        divRadios.append(labelExp, inputExp1, labelExp1, inputExp2, labelExp2, inputExp3, labelExp3)
        liTech.append(divTech, divRadios, buttonRemove)
        form.appendChild(liTech)

        buttonRemove.addEventListener('click', ()=>{
            liTech.remove()
        })
    })
    
    // buttonCadastrar.addEventListener('submit', ()=>{
    //     inputExp1.value
    // })

}

const sectionForm = document.getElementsByClassName('sectionForm')[0]
const formName = document.getElementById('formName')
const buttonEntrar = document.getElementById('entrar')

buttonEntrar.addEventListener('click', ()=>{
    formName.remove()
    criarSecao(sectionForm)
})
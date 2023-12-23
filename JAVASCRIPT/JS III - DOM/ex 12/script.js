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

function criarSecao(sectionForm, inputName) {
    const divForm = document.createElement('div')
    const form = document.createElement('form')
    const buttonAddTech = document.createElement('button')
    const buttonCadastrar = document.createElement('button')
    let developers = []

    buttonAddTech.id = 'buttonAddTech'
    buttonAddTech.innerText = 'Adicionar Tecnologia'
    buttonCadastrar.id = 'buttonCadastrar'
    buttonCadastrar.type = 'submit'
    buttonCadastrar.innerText = 'Enviar'
    
    divForm.id = 'divForm'

    console.log(sectionForm)

    divForm.append(form, buttonAddTech)
    sectionForm.append(divForm)

    let inputIndex = 0

    buttonAddTech.addEventListener('click', ()=>{
        const id = 'inputTech-' + inputIndex
        
        const divTech = document.createElement('div')
        const divRadios = document.createElement('div')
        divRadios.classList.add('divRadios')
        divTech.classList.add('divTech')

        const inputTech = criarInput(id, 'text', 'inputTech', '', 'tech', 'Tecnologia')

        const inputExp1 = criarInput(id + '-1', 'radio', 'inputRadio', '', '0-2 anos', 'radio');
        const inputExp2 = criarInput(id + '-2', 'radio', 'inputRadio', '', '3-4 anos', 'radio');
        const inputExp3 = criarInput(id + '-3', 'radio', 'inputRadio', '', '5+ anos', 'radio');
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

        inputIndex++

        divTech.append(inputTech)
        divRadios.append(labelExp, inputExp1, labelExp1, inputExp2, labelExp2, inputExp3, labelExp3)
        liTech.append(divTech, divRadios, buttonRemove)
        form.appendChild(liTech)

        buttonRemove.addEventListener('click', ()=>{
            liTech.remove()
        })

        buttonAddTech.innerText = 'Adicionar mais'
        divForm.append(buttonCadastrar)
    })
    
    // buttonCadastrar.addEventListener('click', (evt)=>{
    //     evt.preventDefault()
    //     const name = document.getElementById('name')
    //     const allInputTech = [...document.getElementsByClassName('inputTech')]
    //     const allInputRadio =[...document.getElementsByClassName('inputRadio')]
    //     let tech = []

    //     allInputTech.forEach((e)=>{
    //         const techInput = document.querySelector('#' + e.id).value
    //         tech.push({name: techInput})
    //     })
    //     allInputRadio.forEach((e)=>{
    //         console.log(e)
    //         const techRadio = document.querySelector('#' + e.id + ':checked').value
    //         tech.push({exp: techRadio})
    //     })
    buttonCadastrar.addEventListener('click', (evt) => {
        evt.preventDefault();
        const allInputTech = [...document.getElementsByClassName('inputTech')];
        const allInputRadio = [...document.querySelectorAll('.inputRadio:checked')];
        let tech = [];
    
        allInputTech.forEach((e) => {
            const techInput = e.value;
            tech.push({ tecnologia: techInput });
        });
    
        allInputRadio.forEach((e) => {
            const techRadio = e.value;
            tech.push({ exp: techRadio });
        });
    
        const newDeveloper = [{ name: inputName, tech }];
    
        developers.push(newDeveloper);
        console.log(developers);
    });
    
        // const newDeveloper = [{name:name.value, tech}]

        
        // developers.push(newDeveloper)
        // console.log(developers)
    // })


}

const sectionForm = document.getElementsByClassName('sectionForm')[0]
const formName = document.getElementById('formName')
const buttonEntrar = document.getElementById('entrar')


buttonEntrar.addEventListener('click', ()=>{
    const inputName = document.getElementById('name').value
    formName.remove()
    criarSecao(sectionForm, inputName)
})
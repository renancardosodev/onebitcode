function criarPlayers(){
    const namePlayer1 = document.getElementById('player1').value
    const namePlayer2 = document.getElementById('player2').value
    const typeGamePlayer1 = document.querySelectorAll('#divBtn1 .btnEscolha')
    const typeGamePlayer2 = document.querySelectorAll('#divBtn2 .btnEscolha')
    let escolhaPlayer1 = ''
    let escolhaPlayer2 = ''

    typeGamePlayer1.forEach((e)=>{
        if (!e.classList.contains('btnDisable')){
            escolhaPlayer1 = e.dataset.value
        }
    })
    typeGamePlayer2.forEach((e)=>{
        if (e.disabled != true){
            escolhaPlayer2 = e.dataset.value
        }
    })
    console.log(escolhaPlayer1, escolhaPlayer2)


    if(namePlayer1 != "" && namePlayer2 != "" && escolhaPlayer1 != '' && escolhaPlayer2 != '') {
        document.getElementById('escolherPlayers').remove()
    }else{
        if(document.getElementById('spanError')){
            document.getElementById('spanError').remove()
        }
        const spanError = document.createElement('span')
        spanError.id = 'spanError'
        spanError.innerText = '*Preencha todos os campos para começar o jogo!'
        document.getElementById('escolherPlayers').append(spanError)
        
    }

}

function desabilitarBotao(btn, btn2, btn3, btn4){
    btn.addEventListener('click', ()=>{
        btn.classList.remove('btnDisable')
        btn2.classList.add('btnDisable')
        btn3.disabled = true
        btn4.disabled = false
    })
}

const btnX1 = document.getElementById('primeiroX')
const btnO1 = document.getElementById('primeiroO')
const btnX2 = document.getElementById('segundoX')
const btnO2 = document.getElementById('segundoO')

desabilitarBotao(btnX1, btnO1, btnX2, btnO2)
desabilitarBotao(btnO1, btnX1,btnO2, btnX2)



document.getElementById('btnStart').addEventListener('click', criarPlayers)
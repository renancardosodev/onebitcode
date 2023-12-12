alert('Bem-vindo à nave! Vamos começar...')
const namePilot = prompt('Informe seu nome:')
let velocidade = Number(prompt('Qual a velocidade que você quer atingir?'))

while(true){
    if (velocidade <= 0){
        alert('Nave parada, considere aumentar a velocidade para partir.')
    }else if (velocidade < 40){
        alert('Você está devagar, podemos aumentar mais!')
    }else if (velocidade < 80){
        alert('Parece uma boa velocidade para manter')
    }else if (velocidade < 100){
        alert('Velocidade alta, considere diminuir')
    }else {
        alert('VELOCIDADE PERIGOSA! CONTROLE AUTOMATICO FORÇADO')
    }

    let confirmacao = confirm('Você tem certeza que quer atingir ' + velocidade + 'km/h ?')
    if (confirmacao) {
        break
    }else {
        velocidade = Number(prompt('Digite novamente a velocidade que você quer atingir:'))
    }
}

alert('Piloto: ' + namePilot +
      '\nNave em ' + velocidade + 'km/h')

const nomeNave = prompt('Informe o nome da nave')
let novoNome = ''

for (let i=nomeNave.length-1 ; i>=0 ; i--){
    if (nomeNave[i] !== 'e'){
        novoNome += nomeNave[i]
    }else{
        break
    }
}

alert('O nome original: ' + nomeNave + '\nO nome novo: ' + novoNome)
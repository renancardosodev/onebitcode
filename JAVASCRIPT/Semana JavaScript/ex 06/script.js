const nomenave = prompt('Informe o nome da nave:')
let novoNome = ''
const caracter = prompt('Digite o caracter que deseja substituir:')
const novoCaracter = prompt('Por qual caracter deseja substituir?')

for (let i=0 ; i<nomenave.length ; i++) {
    if (nomenave[i] === caracter){
        novoNome += novoCaracter
    }else{
        novoNome += nomenave[i] 
    }
}

alert('O novo nome da nave é: ' + novoNome)
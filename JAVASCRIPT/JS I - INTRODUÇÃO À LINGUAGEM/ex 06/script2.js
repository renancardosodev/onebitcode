const palavra = prompt('Informe a palavra:')
let palavraInvertida = ''

for (let i=1; i<=palavra.length ; i++){
    palavraInvertida += palavra[palavra.length-i]
}

if (palavra === palavraInvertida){
    alert('Essa palavra é um palíndrono\n\n' +
    palavra + ' = ' + palavraInvertida)
}else{
    alert('Essa palavra não é um palíndrono\n\n' +
    palavra + ' é diferente de ' + palavraInvertida) 
}


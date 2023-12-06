const num = Number(prompt('Informe o número:'))
let tabuada = ""

for (let i=0 ; i<20; i++){
    tabuada += num + ' x ' + (i+1) + ' = ' + num * (i+1) + '\n'
}

alert(tabuada)

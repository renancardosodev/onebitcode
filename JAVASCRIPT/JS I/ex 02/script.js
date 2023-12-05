let name1 = prompt("Insira o nome do primeiro veículo:")
let fast1 = Number(prompt("Insira a velocidade do primeiro veículo:"))
let name2 = prompt("Insira a velocidade do segundo veículo:")
let fast2 = Number(prompt("Insira o nome do segundo veículo:"))

if (fast1 > fast2) {
    alert('o veículo ' + name1 + ' é mais rádio.')
}else if (fast1 < fast2) {
    alert('o veículo ' + name2 + ' é mais rádio.')
}else {
    alert('Os dois veículos têm a mesma velocidade.')
}
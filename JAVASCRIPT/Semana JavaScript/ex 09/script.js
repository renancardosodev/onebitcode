function desacelerar(velocidade, imprimir){
    while (velocidade > 0){
        if (velocidade >= 20){
            velocidade -= 20
        }else{
            velocidade = 0
            alert('A nave está parada, as portas podem ser abertas')
        }
        imprimir(velocidade)
    }
}

let velocidade = 150

desacelerar(velocidade,
function imprimir(velocidade){
    alert('A velocidade da nave é de: ' + velocidade + 'km/h')
})
function imc (peso, altura) {
    return new Promise((correct, wrong)=>{
        setTimeout(()=> {
            if (typeof peso === 'number' && typeof altura === 'number') {
                correct(peso/(altura*altura))
            } else {
                wrong('Você não informou um peso correto')
            }
        },3000)
    })
}

function ask (peso, altura){
    imc(peso, altura).then((result)=> {
        if (result < 18.5) {
            console.log(`${result.toFixed(2)} - Magreza`)
        } else if(result < 24.9) {
            console.log(`${result.toFixed(2)} - Normal`)
        } else if(result < 29.9){
            console.log(`${result.toFixed(2)} - Sobrepeso`)
        } else if(result < 39.9){
            console.log(`${result.toFixed(2)} - Obesidade`)
        } else {
            console.log(`${result.toFixed(2)} - Obesidade Grave`)
        }
    }).catch((result) => {console.log(result)})
    console.log('Processando...')
}

ask ("m", 1.80)

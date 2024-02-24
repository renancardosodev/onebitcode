async function imc (peso, altura) {
    if (typeof peso === 'number' && typeof altura === 'number') {
        return peso/(altura*altura)
    }
    return Promise.reject('Você não informou um peso correto')
}

async function ask (peso, altura){
    try{
        console.log('Processando...')

        const result = await imc(peso, altura)

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
    }catch(error){
        console.log(error)
    }
}

ask ('m', 1.80)

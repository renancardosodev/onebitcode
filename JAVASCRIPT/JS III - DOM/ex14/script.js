const mediaAritmeticaSimples = (...numeros) => {
    let total = 0
    numeros.forEach((e)=>{
        total += e
    })

    console.log(total / numeros.length)
}

function mediaPonderada(...obj){
    let totalnumeros = 0
    let totalpesos = 0
    obj.forEach((e)=>{
        totalnumeros += ((e.n ?? 1) * (e.p ?? 1))
        totalpesos += e.p ?? 1
    })
    console.log((totalnumeros/totalpesos).toFixed(2))
}

function mediana(...numeros){
    const meio = Math.floor(numeros.length)/2
    if(numeros.length % 2 === 0){
        mediaAritmeticaSimples(numeros[meio-1], numeros[meio])
    }else {
        console.log(numeros[Math.floor(meio)])
    }
}

function moda(...numeros){
    let qnt = numeros.map(e => [e, numeros.filter(n => n == e).length])
    qnt.sort((a,b) => b[1] - a[1])
    console.log(qnt[0][0])
}

mediaAritmeticaSimples(5,5,5,5,5,5)
mediaPonderada({n:2,p:7}, {n:5,p:5} ,{n:10,p:2})
mediana(2,8,10,5)
moda(2,3,5,6,4,4,8,1,2,2,6,1,8,1)

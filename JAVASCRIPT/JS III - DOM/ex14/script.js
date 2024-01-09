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
        totalnumeros += (e.n * e.p)
        totalpesos += e.p
    })
    console.log((totalnumeros/totalpesos).toFixed(2))
}

mediaAritmeticaSimples(5,5,5,5,5,5)
mediaPonderada({n:2,p:7}, {n:5,p:5} ,{n:10,p:2})
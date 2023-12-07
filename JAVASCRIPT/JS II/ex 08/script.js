let listaDeImoveis = []
let opcao = ''

do {
    opcao = prompt('Imóveis cadastrados: ' + listaDeImoveis.length +
                       '\n\n1 - Salvar um imóvel  |  2 - Todos os imóveis  |  3 - Sair')
                       
    switch (opcao){
        case '1':
            listaDeImoveis.push({
                proprietario: prompt('Informe o nome do proprietário'),
                quartos: prompt('Informe a quantidade de quartos:'),
                banheiros: prompt('Informe a quantidade de banheiros:'),
                garagem: prompt('Possue garagem? (sim/não)')
            })
            alert('Imóvel cadastrado com sucesso!')
            break

        case '2':
            let lista = listaDeImoveis.map((e,i)=>(i+1) + 'º IMÓVEL' +
            '\nProprietário: ' + e.proprietario +
            '\nQuartos: ' + e.quartos +
            '\nBanheiros: ' + e.banheiros +
            '\nGaragem: ' + e.garagem + '\n\n')

            alert('Imóveis cadastrados: \n\n' + lista)
            break

        case '3':
            break

        default:
            alert('Opção inválida')
    }
}while (opcao !== '3')
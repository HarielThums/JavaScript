function fruta(fruta) {
    switch (fruta) {
        case 'maça':
            console.log('Não vendemos essa fruta aqui!')
            break;
        case 'kiwi':
            console.log('Estamos com excassez de Kiwis!')
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
        default:
            console.log('ERRO!!!')
            break;
    }
}

fruta('maça')
fruta('abacaxi')
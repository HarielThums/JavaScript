function dia(dia){
    switch (dia) {
    case 1: case 7:
        console.log('Final de semana')
        break;
    case 2: case 3: case 4: case 5: case 6:
        console.log('Dia útil!')
        break;
    default:
        console.log('Dia inválido!')
        break;
    }
}

dia(1)
dia(2)
dia(3)
dia(4)
dia(5)
dia(6)
dia(7)
dia(0)
dia(8)
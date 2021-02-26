var agora = new Date()
var diasemana = agora.getDay()

/*
Domingo = 0     Segunda = 1     Terça = 2       Quarta = 3  
Quinta = 4      Sexta = 5       Sabado = 6 */

switch (diasemana) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')   
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sabado')
        break;
    default:
        console.log('Dia inválido')
        break;
}




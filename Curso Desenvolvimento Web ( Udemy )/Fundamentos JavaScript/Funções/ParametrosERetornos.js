// Parametros e retornos são opcionais.
/*
function area(largura, altura){
    return console.log(`Área = ${largura * altura} m2.`)
}

area(5,5)

*/



// Vale resaltar, esse metodo não é aconselhado!!!!
function area(largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m2.`)
    } else{
        return console.log(`${area} m2.`)
    }
}

area(2,2)
area(4,2)
area(5,5)
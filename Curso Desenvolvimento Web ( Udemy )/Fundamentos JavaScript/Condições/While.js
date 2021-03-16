function getInteiroAleatrioEntre(min, max) {
    const valor = Math.random() * ( max - min ) + min
    return Math.floor(valor)   
}


let k = 1
valorGerado = 0

while (valorGerado != -1) {
    valorGerado = getInteiroAleatrioEntre(-1, 10)
    console.log(`Número aleatório ${k} é: ${valorGerado}`)
    k++
}


// Armazenando função em uma variável
let imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(5, 2)



// Armazenando uma função ARROW em uma variável
let soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))



// retorno implícito (arrow function)
let subtracao = (a, b) => a - b

console.log(subtracao(5, 2))

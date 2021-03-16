const soma = (x, y) => x + y // por padrão uma arrowfunction sempre será uma função anonima


const imprimirResultado = function(a,b, operação = soma){ // dentro de outra função, foi feita a chamada para função SOMA
    console.log(operação(a , b))
}

imprimirResultado(3, 4)

// outra opção, ao inves de passar a função já dentro do bloco passa na chamada
imprimirResultado(3, 4, function(x, y) {
    return x - y
})

// outra opção, ao inves de passar a função já dentro do bloco passa na chamada
imprimirResultado(3, 4, (x, y) => x * y)

// outra opção

const pessoa = {
    falar: () => console.log('opa!')
}

pessoa.falar()
function ConvertendoDinheiro(a, b) {
    let ttl = a + b
    convertendo = ttl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
    return (convertendo)
}


console.log(ConvertendoDinheiro(0.1, 0.2))
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]


let fragilECaro = produtos.filter(function (p) {
    return p.fragil != false && p.preco >= 500 
})

let fragilECaro2 = produtos.filter((p) => p.fragil != false && p.preco >= 500)

console.log(fragilECaro)
console.log(`\n`) // Quebra de linha XD
console.log(fragilECaro2)


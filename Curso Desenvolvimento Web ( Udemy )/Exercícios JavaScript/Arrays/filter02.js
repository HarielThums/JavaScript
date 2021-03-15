Array.prototype.filter2 = ( function (callback) {
    const newArray = []
    for (let k = 0; k < this.length; k++){
        if (callback(this[k], k, this)) {
            newArray.push(this[k])
        }
    }
    return newArray
})


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]


let fragilECaro = produtos.filter2((p) => p.fragil != false && p.preco >= 500)

console.log(fragilECaro)

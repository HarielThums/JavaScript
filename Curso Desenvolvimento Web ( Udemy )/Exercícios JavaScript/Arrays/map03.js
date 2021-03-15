// Desafio map 03; Aula 114.

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let k = 0; k < this.length; k++){
        newArray.push(callback(this[k], k, this))
    }
    return newArray
}


const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90}',
    '{ "nome": "Kit de lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const JsonParaObjeto = json => JSON.parse(json) // transformando o Json em Object
const preço = produto => produto.preco // pegando o preço em um objeto.

const result = carrinho.map2(JsonParaObjeto).map2(preço) // usando o map para transformar o object em um novo Object


console.log(result)

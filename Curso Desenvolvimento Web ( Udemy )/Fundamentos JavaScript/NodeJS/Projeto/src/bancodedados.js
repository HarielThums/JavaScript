const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarproduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getprodutoid(id) {
    return produtos[id] || {}
}

function getprodutos() {
    return Object.values(produtos)
}

function excluirproduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarproduto, getprodutoid, getprodutos, excluirproduto }

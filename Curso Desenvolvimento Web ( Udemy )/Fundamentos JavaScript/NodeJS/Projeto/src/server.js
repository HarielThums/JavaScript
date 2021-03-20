const port = 3000
const express = require('express')
const app = express()
const bodyparse = require('body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyparse.urlencoded({ extended: true })) // qualquer requisição no express passara aqui, e se a requisição for um urlencoded esse comando será executado.

//visualizando todos os dados da página com get
app.get('/produtos', (req,res) => {
    res.send(bancodedados.getprodutos())
})

// visualizando os dados por id com get
app.get('/produtos/:id', (req, res) => {
    res.send(bancodedados.getprodutoid(req.params.id))
})

//incluindo valores com post
app.post('/produtos', (req, res, next) => {
    const produto = bancodedados.salvarproduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// modificando os valores já inseridos com put
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.salvarproduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

//deletando um produto pelo id
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.excluirproduto(req.params.id)
    res.send(produto) // JSON
})



app.listen(port, () => {
    console.log(`Servidor Online, na porta: ${port}.`)
})



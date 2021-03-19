const fs = require('fs')

const produto = {
    nome: 'Celular',
    cor: 'Preto',
    preco: 1249.55,
    desconto: 0.15,
    
}

fs.writeFile(__dirname + '/arquivogerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})
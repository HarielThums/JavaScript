// Factory simples
/*
function criarPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

console.log(criarPessoa('Hariel', 'Thums', 23))
*/

function criandoProduto(nomeproduto, preço){
    return {
        Produto: nomeproduto,
        Preço: preço,
        ComDesconto: preço * 0.95
    }
}

console.log(criandoProduto('Geladeira', 1450.50))
console.log(criandoProduto('Ipad', 1200.49))

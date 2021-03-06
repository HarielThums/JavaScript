let valor // não recebeu atribuição ( undefined )
console.log(valor)

valor = null // null significa "nenhum valor/ ausência de valor"
console.log(valor)

/* 
Quando o valor NULL é utilizado?
Quando é necessario 'remover' o valor de algo, você quer zerar 
uma variável/remover uma função... então você pode atribuir null a ela, e isso irá fazer
com que ela não tenha mais 'nenhum valor'
*/

/* 
Utilizar Undefined não é aconselhavel, se for necessario zerar, ou remover uma atribuição
opte pelo null, deixe o undefined somente para qual a linguagem atribuir automaticamente. 
*/

const produto = {}
console.log(produto.preco)

produto.preco = 3.50 // atribuindo preço
console.log(produto)

produto.preco = null // removendo a atribuição
console.log(produto
    )
delete produto.preco // removendo completamente o preço
console.log(produto)
 

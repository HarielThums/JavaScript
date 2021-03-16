// Novo recurso do ES6 ( ES 2015 )

function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(rand({})) // se não for passado valor nenhum, irá gerar um num de 0 a 1000

console.log(rand({ min: 500})) // irá gerar valor de 500 até 1000

console.log(rand({max: 500})) // irá gerar valor de 0 até 500.
// Novo recurso do ES6 ( ES 2015 )

function rand([min = 0, max = 1000]){
    if (min > max) {
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}   

console.log(rand([50, 40])) // procurando no intervalo de 40 até 50

console.log(rand([50])) // de 50 a 1000

console.log(rand([])) // aqui ele usa os valores padroes, 0 até 1000

console.log(rand([, 50])) // aqui você usa o primeiro valor nulo, e o segundo com 50, min = 0 max = 50
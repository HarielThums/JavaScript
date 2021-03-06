const valores = [7.7, 9.9, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log(valores[4]) // se o indice não existir ele será undefined!

valores[4] = 10
console.log(valores)
console.log(valores.length) // retorna a quantidade de itens no array

valores.push(11, 13, false, null,  `15`) // adiciona os valores ao array
console.log(valores)


console.log(valores.pop()) // remove o ultimo item que foi adicionado no array

delete valores[0] // deleta o valor no indice indicado
console.log(valores)

console.log(typeof valores) // dirá o type do array: object
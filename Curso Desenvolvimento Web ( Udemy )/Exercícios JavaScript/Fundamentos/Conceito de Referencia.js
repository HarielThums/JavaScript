const a = {name: 'Teste'}
console.log(a)

const b = a
console.log(b)

b.name = 'opa'
console.log(a)

/* O Que isso significa? 
 que A e B tem a mesma referencia de um objeto, ou seja,
se A ou B forem alterados, ambos receberam a alteração, pois 
ambos estão buscando a mesma REFERENCIA na memória!
*/

let c = 3

let d = c
d++

console.log(d)
console.log(c)

/* Para tipos primitivos esse conceito não se aplica,
a let d apenas copiou o VALOR e não a REFERENCIA de C, 
sendo nesse caso alterado apenas D
*/
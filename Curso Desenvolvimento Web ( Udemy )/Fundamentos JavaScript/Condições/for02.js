let array = [3.5, 5.5, 7.9, 9, 10, 5.5, 2.8, 8.9]

for(let k in array){
    console.log(`Nota ${k} é: ${array[k]}`)
}

console.log('\nPassando para objetos!\n')

let pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o ultimo elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona o elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no inicio do array
console.log(pilotos)

// splice pode tanto adiciona quanto remover elementos, exemplos em Arrays.js

//adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionando 2 elementos após o segundo indice.
console.log(pilotos)

pilotos.splice(3, 1) // removendo 1 elemento após o 3 indice
console.log(pilotos)


let lista = ['Bia', 'Maria', 'Ana']

console.log(lista.length) // informou quantos elementos existem no array

console.log(lista.sort()) // reordenou o array

delete lista[1] // deletou sem remover o indice do array
console.log(lista)


lista = ['Bia', 'Maria', 'Ana']

lista.splice(1, 2, 'Elemento') // excluiu a partir do incide 1, 2 elementos e depois adicionou 1 elemnto
console.log(lista)


lista = ['Bia', 'Maria', 'Ana']
lista.push('Abia') // Adicionando um novo elemento 'Abia'
console.log(lista)


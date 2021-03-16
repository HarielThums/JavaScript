// Novo recurso do ES6 ( ES 2015 )

const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereço: {
        Rua: 'Rua ABC',
        numero: 1000
    }
}


const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade : i} = pessoa
console.log(n, i)

const { sobrenome, peso: p = 0 } = pessoa
console.log(sobrenome, p)

const { endereço: { Rua, numero}} = pessoa
console.log(Rua, numero)
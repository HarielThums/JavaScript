const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?

const bolsistas = alunos.map(p => p.bolsista).reduce(k => k != false) // minha resolução, enquanto k for != de false == true!
// const bolsistas = alunos.map(p => p.bolsista).reduce((resultado, bolsista) => resultado && bolsista) // resolução do professor

console.log(`Todos os alunos são bolsistas? ${bolsistas}.`)




// Desafio 2: Algum aluno é bolsista?

const bolsistas2 = alunos.map(p => p.bolsista).reduce((result, atual) => result || atual == true)
console.log(`Algum dos alunos é bolsista? ${bolsistas2}.`)
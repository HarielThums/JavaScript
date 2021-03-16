const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotadoAluno = alunos => alunos.nota
const getNotasdaTurma = turma => turma.alunos.map(getNotadoAluno)

Array.prototype.flatmap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota = escola.flatmap(getNotasdaTurma)
console.log(nota)

// método flatmap transforma um grupo de informações em um único array!

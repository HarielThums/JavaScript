// Desafio aula 86.
// Eu prefiro a resolução com uma factory, usando uma arrow function
function pessoa(nome) {
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${nome}.`)
    }
}

const p1 = new pessoa('João')
p1.falar()
// Com class
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()




// Com arrow function
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Mateus')
p2.falar()


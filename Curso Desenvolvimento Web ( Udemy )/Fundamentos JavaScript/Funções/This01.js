// This e Bind# 01

const pessoa = {
    saudação: 'Bom dia!',
    falar() {
        console.log(this.saudação)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: Funcional e OO


const falardepessoa = pessoa.falar.bind(pessoa) // bind é usado para amarrar a referencia antiga
falardepessoa() // mas isso é meio redundante


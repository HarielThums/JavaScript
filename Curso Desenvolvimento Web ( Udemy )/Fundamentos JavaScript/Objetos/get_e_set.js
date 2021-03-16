const sequencia = {
    _valor: 1, // convenção.
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this.valor){
            this._valor = valor
        }
    }
}



console.log(sequencia.valor, sequencia.valor)


sequencia.valor = 500
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 400 // como definimos uma condição para o incremento, ele não permite voltar o valor.
console.log(sequencia.valor, sequencia.valor)

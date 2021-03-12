function MeuObjeto() {}

console.log(MeuObjeto.prototype)


const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1, obj2)
console.log(obj1.__proto__ === obj2.__proto__) // ambos os objs apontam para o mesmo prototype


MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia, meu nome é ${this.nome}.`)// referenciando o anonimo caso o obj não possua nome proprio
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()


const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Marcos'
obj3.falar()


/* Função em JS é First-Class Object ou First-Class Citizens
ou Higher-Order Function */

// Função de forma literal
function fun1(){

}


// Função armazenada em uma variável
let fun2 = function () {

}


// Função armazenada em um Array, tanto criando quanto mencionando ela
let array = [function (a, b) {
    return a + b
}, fun1, fun2]

console.log(array[0](5, 3))


// Função armazenada em um atributo de Objeto
const obj = {}
obj.falar = function() {
    return 'Opa'
 }
console.log(obj.falar())


// Como passar função como parametro
function run(fun) {
    fun()
}
run(function(){ console.log('Executando')})

// Como retornar/conter uma função
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3) (5)

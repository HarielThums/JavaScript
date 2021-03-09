function soma(){
    let soma = 0
    for (let k in arguments){
        soma += arguments[k]
    } return soma
}

console.log(soma())
console.log(soma(1,2))
console.log(soma(1,2,3.1,4.3))
console.log(soma('a', 'e', 1, 2))


// retornando o inverso da entrada

function Inverso(a) {
    let typea = typeof(a)
    if (a === true || a === false) {
        return !a
    } else if (typea == "number") {
        return -a // invertendo o sinal do valor
    } else return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(a)}.`
}

console.log(Inverso('5'))
console.log(Inverso(true))
console.log(Inverso(-2000))
console.log(Inverso(2000))
console.log(Inverso('Programação'))




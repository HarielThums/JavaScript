// numeros primos

const primos = (n) => {
    let verify = 0
    for (let k = 0; k <= n; k++) {
        if (n % k == 0) {
            verify++
        }
    }
    if (verify == 2 || n == 1 || n == 0) return 1
    else return 0
}

//primos
console.log(primos(0))
console.log(primos(1))
console.log(primos(5))
console.log(primos(7))
console.log(primos(13))
console.log(primos(199))
console.log(primos(223))

//não primos
console.log(primos(9))
console.log(primos(12))
console.log(primos(15))
console.log(primos(20))
console.log(primos(28))
console.log(primos(408))



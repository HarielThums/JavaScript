let num = [1, 2, 3, 4, 5]

let result = num.map(function (e) {
    return e * 2 // incrementando o dobro de cada elemento existente em num ao array result
})

let result2 = e => e + 5
let result3 = e => e * 5

console.log(result)

console.log(num.map(result2))

console.log(num.map(result3))


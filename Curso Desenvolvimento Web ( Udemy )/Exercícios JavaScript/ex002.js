
function triangulo(a,b,c) {
    if (a > (b + c) || b > (a + c) || c > (a + b)) {
        return console.log('Esses valores não formam um triângulo!')
    } else if (a == b && b == c) {
        return console.log('Triângulo equilatero!')
    } else if (a == b || b == c || c == a) {
        return console.log('Triângulo isósceles')
    } else return console.log('Triângulo escaleno!')
}

triangulo(3, 3, 3)
triangulo(3, 4, 4)
triangulo(3, 4, 5)
triangulo(10, 2, 2)


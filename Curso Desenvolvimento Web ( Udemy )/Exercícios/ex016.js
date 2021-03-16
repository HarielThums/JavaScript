function calculadora(a, operação, b) {
    switch (operação) {
        case '+':
            console.log(a + b)
            break;
        case '-':
            console.log(a - b)
            break;
        case '*':
            console.log(a * b)
            break;
        case '/':
            console.log(a / b)
            break;
        default: console.log('operação inválida')
            break;
    }
}

calculadora(2, '+', 2)
calculadora(4, '-', 2)
calculadora(4, '*', 2)
calculadora(10, '/', 2)
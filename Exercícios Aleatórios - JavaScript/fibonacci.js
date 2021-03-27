function fibonacci(num) {
    if (num === 1){return 1}
    if (num === 2){return 2}
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(5))


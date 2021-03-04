//fatorial com RECURSIVIDADE!
function fat(f) {
    if (f == 1) {
        return 1
    } else {
        return f * fat(f-1)
    }
}

console.log(fat(5))

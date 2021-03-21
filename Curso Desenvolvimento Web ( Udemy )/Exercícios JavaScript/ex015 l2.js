const numeros = [10, 70, 22, 43]

function numerospares(num) {
    let numpar = []
    
    for (k in num){
        if (num[k] % 2 == 0 && k % 2 == 0) {
            numpar.push(num[k])
        }
    }
    return console.log(numpar)
}

numerospares(numeros)

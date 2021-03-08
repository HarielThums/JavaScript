// Gerando valor aleatório.

function aleatorio(min, max) {
    valor = Math.random() * (max - min) + min
     return Math.floor(valor)
    //  return console.log(Math.floor(valor))
}

console.log(`O numero aleatório é: ${aleatorio(0, 50)}`)

// aleatorio(0, 50)
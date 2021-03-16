const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


// Sem callback, separando notas baixas
let notasBaixas = []
for (let k in notas) {
    if (notas[k] < 7){
        notasBaixas.push(notas[k])
    }
}
console.log(notasBaixas)

// Com callback, separando notas baixas

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)


//Com Callback, separando notas baixas
const notasBaixas3 = notas.filter((nota) => nota < 7)
console.log(notasBaixas3)


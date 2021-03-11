function jurosSimples(capInicial, taxajuros, tempo) {
    let montante = (capInicial * (taxajuros/100) * tempo) + capInicial 
    return montante
}

function jurosComposto(capInicial, taxajuros, tempo) {
    let montante = (capInicial * ((1 + taxajuros/100)) ** tempo)
    return montante.toFixed(2)
}

console.log(jurosSimples(1000, 10, 12))
console.log(jurosComposto(5000, 1, 6))

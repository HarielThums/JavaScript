function calcular() {

    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    if (inicio.value == 0 || fim.value == 0) {
        res.innerHTML = `Impossível contar.`
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        res.innerHTML = `Contando: `

    if (passo == 0) {
        alert('Passo 0 é inválido, consideramos Passo 1.');
        passo = 1
    }
    
    if (inicio < fim) {
        // conta crescente ' += passo '
        for (let k = inicio; k <= fim; k += passo ) {
            res.innerHTML += `${k}, `
        } 
    } else {
        // conta decrescente ' -= passo '
        for(let k = inicio; k >= fim; k -= passo) {
            res.innerHTML += `${k}, `
        }
    }
    res.innerHTML += `\u{1F3C1}`
    }

}

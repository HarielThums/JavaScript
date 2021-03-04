function calcular() {
    // Gosto mais desse método, sem colocar o retorno da tabuada dentro de um container 
    let valor = document.querySelector('input#valor')
    let res = document.querySelector('div#res')

    if (valor.value == 0) {
        res.innerHTML = 'Valor inválido, tente um valor diferente.'
    } else{
        valor = Number(valor.value)
        res.innerHTML = 'Resultado: <br> <br>'

        for (k = 1; k <= 10; k += 1) {
            resultado = valor * k
            res.innerHTML += `${valor} x ${k} = ${resultado} <br> `
        }
    
    }
}
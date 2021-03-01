function calcular() {
    // gosto mais do meu método, método 2!!!
    let valor = document.querySelector('input#valor')
    let tab = document.getElementById('res')

    if (valor.value == 0) {
        alert('Valor inválido, tente um valor diferente.');
    } else{
        valor = Number(valor.value)
        tab.innerHTML = ''

        for (k = 1; k <= 10; k += 1) {
            let item = document.createElement('option')
            item.text = `${valor} x ${k} = ${k*valor}`
            tab.appendChild(item)
        }
    }
}

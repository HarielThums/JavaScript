Array.prototype.forEach2 = function(array) {
    for (let k = 0; k < this.length; k++) {
        array(this[k], k, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) {
    console.log(indice, nome)
})

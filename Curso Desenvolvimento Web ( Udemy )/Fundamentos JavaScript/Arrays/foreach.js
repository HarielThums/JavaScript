const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


aprovados.forEach(function (nome, indice) {
    console.log(indice, nome)
})

console.log('\n') // quebra de linha!

aprovados.forEach((nome,indice) => console.log(indice, nome))

console.log('\n') // quebra de linha!

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


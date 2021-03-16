pontuações = [10, 20, 20, 8, 25, 3, 0, 30]

function NovoJogoBasquete(novoValor) {
        return pontuações.push(novoValor)
}

function MeusJogosBasquete(array) {
    let recordeDePontos = array[0]
    let piorJogo = array[0]
    let contadorderecords = 0
    let ContadorpiorJogo = 1

    for (k in array){
        if (array[k] > recordeDePontos) {
            recordeDePontos = array[k]
            contadorderecords++
        }
    }    
    for (let k = 1; k < array.length; k++){
        if (array[k] < piorJogo) {
            piorJogo = array[k]
            ContadorpiorJogo = k+1
        }
    }
    
    
    return console.log(`Records: ${contadorderecords}, Seu pior jogo foi o: ${ContadorpiorJogo}`)

}

MeusJogosBasquete(pontuações)


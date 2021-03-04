// Foi bem dificil! Meu erro estava em colocar o array dentro da func adicionar...
var array = []
let numero = document.querySelector('input#valor')
let lista = document.getElementById('res')
let res = document.querySelector('div#res')

function adicionar() {


    n = Number(numero.value)

    if (numero.value <= 0 || numero.value > 100 || array.indexOf(n) != -1) {
        alert('Número inválido!');
    } else { 
        let item = document.createElement('option')
        item.text = `Valor ${n} foi adicionado.`
        array.push(n)
        lista.appendChild(item)
        res.innerHTML = ''
    }
    numero.value = '' // limpando o campo para inserir valor
    numero.focus() // levando o foco do cursos para o campo de entrada apos limpar
}

function finalizar() {

    if (array.length == 0) {
        res.innerHTML = '<br> Favor insira um número acima.'
    } else {
        res.innerHTML = `<br> Ao todo, temos ${array.length} números cadastrados.`

        let maior = Math.max(...array) // usado esse método para pegar o maior valor no array ----- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
        res.innerHTML += `<br> O maior valor informado foi ${maior}.`

        res.innerHTML += `<br> O menor valor informado foi ${array.sort()[0]}.`
        
        let soma = 0
        for (k = 0; k < array.length; k++) {
            soma += parseInt(array[k]);
        }
        res.innerHTML += `<br> Somando todos os valores, temos: ${soma}.`
        
        let div = 0
        for (k = 0; k < array.length; k++) {
            div = soma / array.length
        }
        res.innerHTML += `<br> A média dos valores digitados é: ${div}.`
    }
}
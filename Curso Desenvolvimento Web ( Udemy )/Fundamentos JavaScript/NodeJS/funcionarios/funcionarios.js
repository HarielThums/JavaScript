const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const chineses = funcionario => funcionario.pais === 'China'
const mulher = funcionario => funcionario.genero === 'F'
const salario = (func, funcAtual) => { 
    return func.salario < funcAtual.salario ? func : funcAtual // função que verifica se o salario é menor que o atual (indice do for)
}


axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    const func = funcionarios.filter(chineses).filter(mulher).reduce(salario)
    console.log(func)
})




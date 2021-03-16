/* Closure é o escopo cirado quando uma função é declarada, e esse escopo vai 
permitir acessar variáveis externas a função */

// Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return x
}

console.log(fora())
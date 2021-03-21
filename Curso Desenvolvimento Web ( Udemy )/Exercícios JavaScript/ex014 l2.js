const object = { 
    nome: "maria",
    profissao: "Dev de Software"
}

//opção 1, mais bonita e simples.
const objectParaArray = obj => Object.entries(obj) // Object.entries = vai gerar um array com outros arrays contendo todas as chaves e valores

//opção 2 ainda é funcional.
const objectParaArray2 = function (obj) {
    const result = []
    for (k in obj){
        result.push([k, obj[k]])
    }
    return result
}

console.log(objectParaArray(object))
console.log(objectParaArray2(object))
// JSON ( JavaScript Object Notation )

const obj = {a: 1, b:2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))



console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // objeto gerado a partir de um JSON

const arquivoJson = JSON.parse('{"a": 1.57, "b": true, "c": "string", "d": {}, "e": []}')
console.log(arquivoJson)



let ThisArrow = param => console.log(this === param)
ThisArrow(global)
ThisArrow(module.exports)

const obj = {}

ThisArrow = ThisArrow.bind(obj) // this em arrow function não aceita atribuição, ele sempre será da função.

ThisArrow(obj)
ThisArrow(module.exports)
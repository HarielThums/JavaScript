const list = ["Javascript", 1, "3", "Web", 20]

const procurandoNumeros = array => array.filter(k => typeof(k) === 'number')

console.log(procurandoNumeros(list))

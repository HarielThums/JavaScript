//uri ex 1004

const input = require("fs").readFileSync('stdin', 'utf8')
const lines = input.split(' ').map(item => parseInt(item))

let num1 = lines[0];
let num2 = lines[1];

console.log(`PROD = ${num1 * num2}`)

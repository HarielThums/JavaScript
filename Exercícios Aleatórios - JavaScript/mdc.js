const input = require("fs").readFileSync('stdin', 'utf8')
const lines = input.split(' ').map(item => parseInt(item))

let a = lines[0]
let b = lines[1]

while (b != 0) {
    let mdc = a % b
    a = b
    b = mdc
}

console.log(a)

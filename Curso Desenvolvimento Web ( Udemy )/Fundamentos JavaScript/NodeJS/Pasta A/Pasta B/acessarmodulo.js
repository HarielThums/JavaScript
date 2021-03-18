const moduloA = require('../../ModuloA')
console.log(moduloA.ola)


const http = require('http')
http.createServer((req, res) =>{
    res.write('Bom dia!')
    res.end()
}).listen(3000)
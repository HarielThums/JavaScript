// Aqui temos o exemplo de como fazer a requisição e entrada
// do http usando o Express.

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, resp) {
    resp.send("<html><body>Portal de noticias.</body></html>")
});

app.get('/tecnologia', function (req, res) {
    res.render("secao/tecnologia")
});

// agora passares a utilizar render, ao inves de send, por termos incluido
// o EJS.
// app.get('/tecnologia', function (req, res) {
//     res.send("<html><body>Noticias de tecnologia.</body></html>")
// });


app.listen(3000, function(){
    console.log('Servidor rodando com Express');
});
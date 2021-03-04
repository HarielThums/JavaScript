// Aqui temos o exemplo de como fazer a requisição e entrada
// do http usando o Express.

var express = require('express');
var app = express();

//determina qual o view engine será utilizado
app.set('view engine', 'ejs');

app.set('views', './app/views');

module.exports = app;

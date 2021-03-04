// Aqui temos o exemplo de como fazer a requisição e entrada
// do http usando o node.
var http = require('http');
var server = http.createServer(function(req, res) {
    var categoria = req.url;

    if (categoria == '/esportes') {
        res.end("<html><body>Noticias de esportes.</body></html>");
    } else if (categoria == '/tecnologia') {
        res.end("<html><body>Portal sobre tecnologia.</body></html>");
    } else {
        res.end("<html><body>Portal de noticias.</body></html>");
    }
    
});
server.listen(3001);


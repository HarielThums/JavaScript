const app = require('./server/server'), port = 3000


app.listen(port, () => {
    console.log(`Servidor rodando com Express na url: localhost:${port}.`)
})
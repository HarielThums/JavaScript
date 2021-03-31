const app = require('./server/server'), port = 3000
const admin = require('./routes/admin')


// Rotas
    app.get('/', (req,res) => res.send('Rota principal!'))
    app.use('/admin', admin)

app.listen(port, () => console.log(`Servidor rodando!`))
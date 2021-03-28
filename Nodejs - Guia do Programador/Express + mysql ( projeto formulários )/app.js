const app = require('./server/server'), port = 3000
const post = require('./models/post')


// Routes
    app.get('/cad', (req,res) => res.render('formulario'))

    app.get('/', (req,res) => {
        post.findAll({order: [['id', 'desc']]}).then((bd) => res.render('home', { posts: bd }))
    })

    app.post('/add', (req,res) => {
        post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        })
        // .then(() => res.send('Post criado com sucesso!'))
        .then(() => res.redirect('/'))
        .catch((e) => res.send(`Falha ao criar o post: ${e}`))
    })

    app.get('/deletar/:id', (req,res) => {
        post.destroy({where: {'id': req.params.id}})
        // .then(() => res.send('Post deletado com sucesso!'))
        .then(() => res.redirect('/'))
        .catch(e => res.send(`Está postagem não existe: ${e}`))
    })

app.listen(port, () => {
    console.log(`Servidor rodando com Express na url: localhost:${port}.`)
})
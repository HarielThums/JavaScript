const app = require('./server/server'), port = process.env.PORT || 3000
const admin = require('./routes/admin')
const usuarios = require('./routes/usuario')
const mongoose = require('mongoose')
require('./models/Categoria')
require('./models/Postagem')
const Categoria = mongoose.model('Categorias')
const Postagem = mongoose.model('Postagens')
const passport = require('passport')
require('./config/auth')(passport)


// Rotas
    app.get('/', (req,res) => {
        Postagem.find().lean().populate('categoria').sort({data: 'desc'})
        .then((postagens) => {
            res.render('index', {postagens: postagens})
        })
        .catch(err => {
            req.flash('error_msg', 'Houve um erro interno!')
            res.redirect('/404')
        })
    })

    app.get('/postagem/:slug', (req,res) => {
        Postagem.findOne({slug: req.params.slug}).lean()
        .then((postagem) => {
            if (postagem){
                res.render('postagem/index', {postagem: postagem}) 
            }else { 
                req.flash('error_msg', 'Essa postagem não existe!')
                res.redirect('/')
        }
        })
        .catch(err => {
            req.flash('error_msg', 'Houve um erro interno!')
            res.redirect('/')
        })
    })

    app.get('/categorias', (req,res) => {
        Categoria.find().lean()
        .then((categorias) => {
            if (categorias) {
                res.render('categorias/index', {categorias: categorias})
            } else {
                req.flash('error_msg', 'Nenhuma categoria existente')
                res.redirect('/')
            }
        })
        .catch(err => {
            req.flash('error_msg', 'Houve um erro interno!')
            res.redirect('/')
        })
    })

    app.get('/categorias/:slug', (req,res) => {
        Categoria.findOne({slug: req.params.slug}).lean()
        .then(categoria => {
            if (categoria) {
                Postagem.find({categoria: categoria._id}).lean()
                .then(postagens => {
                    res.render('categorias/postagens', {postagens: postagens, categoria: categoria})
                })
                .catch(err => {
                    req.flash('error_msg', 'Houve um erro ao listar as postagens!')
                    res.redirect('/')
                })
            } else {
                req.flash('error_msg', 'Essa categoria não existe!')
                res.redirect('/')
            }
        })
        .catch(err => {
            req.flash('error_msg', 'Houve um erro interno!')
            res.redirect('/')
        })
    })

    app.get('/404', (req,res) => {
        res.send('Erro 404!')
    })

    app.use('/admin', admin)

    app.use('/usuarios', usuarios)

app.listen(port, () => console.log(`Servidor rodando!`))
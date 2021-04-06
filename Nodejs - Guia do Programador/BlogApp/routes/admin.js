const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Categoria')
require('../models/Postagem')
const Postagem = mongoose.model('Postagens')
const Categoria = mongoose.model('Categorias')
const {eAdmin} = require('../helpers/eAdmin')
const { routes } = require('../server/server')


// Router

router.get('/', eAdmin, (req,res) => {
    res.render('admin/index')
})


router.get('/categorias', eAdmin, (req,res) => {
    Categoria.find().sort({date: 'desc'}).lean()
    .then(categorias => res.render('admin/categorias', {categorias: categorias}))
    .catch(err => {
        req.flash('error_msg', 'Houve um erro ao listar as categorias.')
        res.redirect('/admin')
    })
})

router.get('/categorias/add', eAdmin, (req,res) => res.render('admin/addcategorias'))

router.post('/categorias/nova', eAdmin, (req,res) => {

    var erros = []
    if (!req.body.nome) {
        erros.push({ texto: 'Nome inválido!' })
    }
    if (!req.body.slug) {
        erros.push({ texto: 'Slug inválido!' })
    }
    if (req.body.nome.length < 2) { 
        erros.push({ texto: 'Nome da categoria muito pequeno!'})
    }

    if (erros.length > 0) {
        res.render('admin/addcategorias', { erros: erros })
    } else {
        const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug,
    }

    new Categoria(novaCategoria).save()
        .then(() => {
            req.flash('success_msg', 'Categoria criada com sucesso!')
            res.redirect('/admin/categorias')
        })
        .catch(e => {
            req.flash('error_msg', 'Houve um erro ao salvar a categoria, tente novamente!')
            res.redirect('/admin')
        })
    }
})        

router.get('/categorias/edit/:id', eAdmin, (req,res) => {
    Categoria.findOne({_id:req.params.id}).lean()
    .then(categoria => {
        res.render('admin/editcategorias', {categoria: categoria})
    })
    .catch(err => {
        req.flash('error_msg', 'Esta categoria não existe!')
        res.redirect('/admin/categorias')
    })
})

router.post('/categorias/edit', eAdmin, (req,res) => {
    // validação igual ao Add categorias.
    Categoria.findOne({_id: req.body.id})
    .then(categoria => {
        
        categoria.nome = req.body.nome
        categoria.slug = req.body.slug

        categoria.save().then(() => {
            req.flash('success_msg', 'Categoria editada com sucesso!')
            res.redirect('/admin/categorias')
        })
        .catch(err => {
            req.flash('error_msg', 'Houve um erro interno ao salvar a edição da categoria')
            res.redirect('/admin/categorias')
        })
    })
    .catch(err => {
        req.flash('error_msg', 'Houve um erro ao editar a categoria')
        res.redirect('/admin/categorias')  
    })
})
    

router.post('/categorias/deletar', eAdmin, (req,res) => {
    Categoria.remove({_id: req.body.id})
    .then(() => {
        req.flash('success_msg', 'Categoria deletada com sucesso!')
        res.redirect('/admin/categorias')
    })
    .catch(err => {
        req.flash('error_msg', 'Houve um erro ao deletar a categoria')
        res.redirect('/admin/categorias')
    })
})

router.get('/postagens', eAdmin, (req,res) => {
    Postagem.find().lean().populate('categoria').sort({data: 'desc'})
    .then(postagens => res.render('admin/postagens', {postagens: postagens}))
    .catch(err => {
        req.flash('error_msg', 'Houve um erro ao listar as postagens.' + err)
        res.redirect('/admin')
    })
})

router.get('/postagens/add', eAdmin, (req,res) =>{
    Categoria.find().lean()
    .then(categorias => {
        res.render('admin/addpostagem', {categorias: categorias})
    })
    .catch(err => {
        res.flash('error_msg', 'Houve um erro ao carregar o formulário')
        res.redirect('/admin')
    })
})

router.post('/postagens/nova', eAdmin, (req,res) => {
    var erros = []
    if(req.body.categoria == '0') {
        erros.push({ texto: 'Categoria inválida, registre uma categoria'})
    }
    
    if (erros.length > 0) {
        res.render('admin/addpostagem', { erros: erros })
    } else {
        const novaPostagem = {
            titulo: req.body.titulo,
            slug: req.body.slug,
            descrição: req.body.descrição,
            categoria: req.body.categoria,
            conteudo: req.body.conteudo,
        }

        new Postagem(novaPostagem).save()
        .then(() => {
            req.flash('success_msg', 'Nova postagem criada com sucesso!')
            res.redirect('/admin/postagens')
        })
        .catch(err => {
            req.flash('error_msg', 'Houve um problema ao criar a postagem!')
            res.redirect('/admin/postagens')
        })

    }
})

router.get('/postagens/edit/:id', eAdmin, (req,res) => {
    Postagem.findOne({_id: req.params.id}).lean()
    .then(postagens => {
        Categoria.find().lean()
        .then(categorias => {
            res.render('admin/editpostagens', {categorias: categorias, postagens: postagens} )
        })
        .catch(err => {
            req.flash('error_msg', 'Houve um problema ao encontrar as categorias!')
            res.redirect('/admin/postagens')
        })
    })
    .catch(err => {
        req.flash('error_msg', 'Houve um problema ao carregar o formulário de edição!')
        res.redirect('/admin/postagens')
    })
})

router.post('/postagens/edit', eAdmin, (req,res) => {
    // validação igual ao Add postagens.
    Postagem.findOne({_id: req.body.id})
    .then(postagens => {
        postagens.titulo = req.body.titulo
        postagens.slug = req.body.slug
        postagens.descrição = req.body.descrição
        postagens.conteudo = req.body.conteudo
        postagens.categoria = req.body.categoria

        postagens.save()
        .then(() => {
            req.flash('success_msg', 'Postagem editada com sucesso!')
            res.redirect('/admin/postagens')
        })
        .catch(err => {
            req.flash('error_msg', 'Houve um erro ao editar a postagem!')
            res.redirect('/admin/postagens')
        })
    })
    .catch(err => {
        console.log(err)
        req.flash('error_msg', 'Erro no processo de edição!')
        res.redirect('/admin/postagens')
    })
})

router.post('/postagens/deletar', eAdmin, (req,res) => {
    Postagem.remove({_id: req.body.id})
    .then(() => {
        req.flash('success_msg', 'Postagem deletada com sucesso!')
        res.redirect('/admin/postagens')
    })
    .catch(err => {
        req.flash('error_msg', 'Houve um erro ao deletar a postagem!')
        res.redirect('/admin/postagens')
    })
})

module.exports = router
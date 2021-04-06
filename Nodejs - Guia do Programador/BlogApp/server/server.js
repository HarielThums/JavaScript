const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const handlebars = require('express-handlebars')
const app = express()
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')

// config
    // app.use() sempre será usado para configurar um middleware!
    // Session
        app.use(session({
            secret: 'key',
            resave: true,
            saveUninitialized: true
        }))
    //Passport * importante qu el esteja entre a session e o flash * 
        app.use(passport.initialize())
        app.use(passport.session())
    //flash
        app.use(flash())
    //middleware
        app.use((req, res, next) => {
            // res.locals esse comando serve para criar variaveis globais, que podem ser acessads em qualquer local do projeto!
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            res.locals.error = req.flash('error')
            res.locals.user = req.user || null // armazenando dados do user logado
            next() // sempre tem que existir um next no fim de uma middleware
        })
    //body parser
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
    // handlebars
        app.engine('handlebars', handlebars({ defaultlayout: 'main' }))
        app.set('view engine', 'handlebars')
    //mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/blogApp', { 
            useNewUrlParser:true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => console.log('DB connected!'))
        .catch(e => console.log(`DB error: ${e}`))
    //public
        app.use(express.static(path.join(__dirname, 'public')))


module.exports = app
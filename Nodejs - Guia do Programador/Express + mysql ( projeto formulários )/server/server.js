const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')



// Config
 // Template Engine
    app.engine('handlebars', handlebars({ defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

// Body Parser
    app.use(bodyParser.urlencoded({ extended: false}))
    app.use(bodyParser.json())


module.exports = app
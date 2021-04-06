const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuario = new Schema({
    nome:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    //controle de acesso para Admin, 0 = user, 1 = admin
    eAdmin:{
        type: Number,
        default: 0
    },
    senha: {
        type: String,
        required: true
    }
})

mongoose.model('usuarios', Usuario)
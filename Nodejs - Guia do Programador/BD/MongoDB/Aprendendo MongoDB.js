const mongoose = require('mongoose')
// Config
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/aprendendo')
    .then(() => console.log('Banco de dados conectado!'))
    .catch(e => console.log(`Error ao se conectar: ${e}`))


// Definindo Model - Usuarios;
const userSchema = mongoose.Schema({
    nome:  { type: String, require: true },
    sobrenome: { type: String, require: true },
    email: { type: String, require: true },
    idade: { type: Number },
    pais: { type: String}
})


// Collection
mongoose.model( 'usuarios', userSchema )

const newuser = mongoose.model('usuarios')

    new newuser({
        nome: 'Amanda',
        sobrenome: 'Borges',
        email: 'amanda@hotmail.com',
        idade: 23,
        pais: 'Brasil',
    }).save()
    .then(() => 'User created.')
    .catch((e) => `Erro in create: ${e}`)
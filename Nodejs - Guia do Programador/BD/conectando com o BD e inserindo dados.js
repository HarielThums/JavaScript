const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemaDeCadastro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(() => console.log('Connection successfully!'))
    .catch(e => console.log(`Unable to connect, ${e}`))


// Postagem
const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },
})

//para criar é usado o sync, após criado é necessario remover
// postagem.sync({force: true})

/* criando uma postagem

postagem.create({
    titulo: 'Titulo teste',
    conteudo: 'lorem ipsum'
})
*/ 


// Usuarios
const usuario = sequelize.define('usuariosViaNodejs', {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//para criar é usado o sync, após criado é necessario remover
// usuario.sync({force: true})

usuario.create({
    nome: 'Hariel Thums',
    idade: 23,
    email: 'hariel@hotmail.com'
})
const db = require('./db')

const post = db.sequelize.define('Postagens', {
    titulo: {type: db.Sequelize.STRING},
    conteudo: {type: db.Sequelize.TEXT}
})

// post.sync({force: true})

module.exports = post
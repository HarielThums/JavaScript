function tratarErroELancar(erro) {
    // throw new Error('Erro 555')
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}



function imprimirnomegritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Fim.')
    }
}

/* Com ERRO */
const obj = {nome: 'Roberto'} // erro está em 'nome' != 'name' definido na function
imprimirnomegritado(obj)

/* Sem ERRO
const obj = {name: 'Roberto'} // erro está em 'nome' != 'name' definido na function
imprimirnomegritado(obj)
*/

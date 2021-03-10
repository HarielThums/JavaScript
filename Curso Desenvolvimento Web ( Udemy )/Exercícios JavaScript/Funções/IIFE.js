// Immediately Invoked Function Expression

( function () {
    var k = 1
    console.log('Será executado na hora!')
    console.log('Está função está fugindo do escopo global...')
})() // detalhe está que essa função esteá dentro de (), e isso a torna immediately invoked

// console.log(k)

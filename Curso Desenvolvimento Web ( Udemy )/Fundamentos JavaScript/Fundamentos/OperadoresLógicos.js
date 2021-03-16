
function compras(trabalho1, trabalho2){
    let comprarsorvete = trabalho1 || trabalho2
    let comprartv50 = trabalho1 && trabalho2
    let comprartv32 = trabalho1 || trabalho2
    let mantersaudavel = !comprarsorvete
    return { comprarsorvete, comprartv50, comprartv32, mantersaudavel }
}

console.log(compras(true, true))

console.log(compras(true, false))

console.log(compras(false, false))
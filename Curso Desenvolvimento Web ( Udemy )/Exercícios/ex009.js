function Nota(nota = 0) {
    if (nota < 38 ) {
        return console.log(`Você foi reprovado com nota: ${nota}.`)
    }else if (nota >= 38) {
        if (nota % 5 > 2) {
            nota = nota + (5 - nota % 5)
        }
 
        return console.log(`Você foi aprovado com nota: ${nota}.`)
    }
}
Nota(79)
Nota(30)
Nota(43)
Nota(58)
Nota(51)
Nota(62)

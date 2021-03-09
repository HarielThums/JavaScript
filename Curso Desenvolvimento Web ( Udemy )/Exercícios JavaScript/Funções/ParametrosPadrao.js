//Antes do ES6
function soma(a,b,c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // essa opção era a mais efetiva!!
    return a + b + c
}

// Após o ES6
function soma2(a = 1, b = 1, c = 1) { // se nenhum valor for adicionado será atribuido 1
    return a + b + c
}



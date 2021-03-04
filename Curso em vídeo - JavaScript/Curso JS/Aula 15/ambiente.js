let num = [5,8,2,9,3]
/*
console.log(num)

num[5] = 6 // ambos os comandos fazem a mesma coisa.
num.push(6) // ambos os comandos fazem a mesma coisa.

console.log(num)
console.log(num.length)
console.log(num.sort())
*/

/*
for (let k = 0; k < num.length; k++) {
    console.log(num[k])
}
*/

// está solução SÓ pode ser usada para Arrays e Objects! 
for(let k in num){
    console.log(num[k])
}

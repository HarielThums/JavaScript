let k = 1
while (k <= 10) {
    console.log(k)
    k++
}

console.log('Primeiro foi com While, agora com for!')


for (let k = 1; k <= 10; k++) {
    console.log(k)
}


console.log('Percorrendo um array')

let array = [3.5, 5.5, 7.9, 9, 10, 5.5, 2.8, 8.9]
for (let k = 0; k < array.length; k++) {
    console.log(`As notas do ${k+1} aluno é: ${array[k]}`)
}


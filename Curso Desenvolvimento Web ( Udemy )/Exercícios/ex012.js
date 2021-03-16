// function fatorial(num) {
//     let fat = 1
//     for (let k = num; k > 1; k--){
//         fat = fat * k
//     }
//     return fat 
// }



// Função Recursiva!
function fatorial(num) {
    if (num == 0 || num == 1) return 1
    else return num * fatorial(num - 1)
}

console.log(fatorial(5))

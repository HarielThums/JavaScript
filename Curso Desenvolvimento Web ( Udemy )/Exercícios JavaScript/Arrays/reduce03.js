// implementando uma função reduce XD
Array.prototype.reduce2 = (function (callback) {
    let acumulador = this[0]
    for (let k = 1; k < this.length; k++){
        acumulador = callback(acumulador, this[k])
    }
    return acumulador
})


const nums = [1,2,3,4,5,6]
console.log(nums.reduce2((total, valor) => total + valor))

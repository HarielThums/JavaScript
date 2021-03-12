// função increvel atribuida ao método String para inverter qualquer string desejada...

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('12345'.reverse())

